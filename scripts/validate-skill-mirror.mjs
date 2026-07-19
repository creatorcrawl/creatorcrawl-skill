#!/usr/bin/env node

import { readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
const INDEX_PATH = join(ROOT, '.well-known/skills/index.json');

async function listFiles(root, current = root) {
  const entries = await readdir(current, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(current, entry.name);
    if (entry.isSymbolicLink()) {
      throw new Error(`Symbolic links are not allowed in skill packages: ${relative(root, path)}`);
    }
    if (entry.isDirectory()) {
      files.push(...(await listFiles(root, path)));
      continue;
    }
    if (!entry.isFile()) {
      throw new Error(`Unsupported skill package entry: ${relative(root, path)}`);
    }
    files.push(relative(root, path));
  }

  return files.sort();
}

function assertUniqueFiles(files, skillName) {
  const unique = new Set(files);
  if (unique.size !== files.length) {
    throw new Error(`Duplicate file entry in ${skillName} manifest`);
  }
}

async function validateSkill(skill) {
  const sourceRoot = join(ROOT, 'skills', skill.name);
  const mirrorRoot = join(ROOT, '.well-known/skills', skill.name);
  const declaredFiles = [...skill.files].sort();
  assertUniqueFiles(declaredFiles, skill.name);

  const sourceFiles = await listFiles(sourceRoot);
  const mirrorFiles = await listFiles(mirrorRoot);
  const expected = JSON.stringify(declaredFiles);

  if (JSON.stringify(sourceFiles) !== expected) {
    throw new Error(`${skill.name} source files do not match the public manifest`);
  }
  if (JSON.stringify(mirrorFiles) !== expected) {
    throw new Error(`${skill.name} mirror files do not match the public manifest`);
  }

  for (const file of declaredFiles) {
    const [source, mirror] = await Promise.all([
      readFile(join(sourceRoot, file)),
      readFile(join(mirrorRoot, file)),
    ]);
    if (!source.equals(mirror)) {
      throw new Error(`${skill.name}/${file} differs between source and public mirror`);
    }
  }
}

const index = JSON.parse(await readFile(INDEX_PATH, 'utf8'));
if (!Array.isArray(index.skills) || index.skills.length === 0) {
  throw new Error('Skill index must contain at least one skill');
}

for (const skill of index.skills) {
  await validateSkill(skill);
}

process.stdout.write(`Validated ${index.skills.length} mirrored skill package(s).\n`);
