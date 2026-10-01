import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { copyFileSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'

test('skill CLI runs inside an ESM project without installed dependencies', (t) => {
  const directory = mkdtempSync(join(tmpdir(), 'creatorcrawl-skill-'))
  t.after(() => rmSync(directory, { recursive: true, force: true }))
  writeFileSync(join(directory, 'package.json'), JSON.stringify({ type: 'module' }))
  const binary = join(directory, 'creatorcrawl.cjs')
  copyFileSync(new URL('../skills/creatorcrawl/scripts/creatorcrawl.cjs', import.meta.url), binary)
  const version = execFileSync(process.execPath, [binary, '--version'], {
    cwd: directory,
    encoding: 'utf8',
  })
  assert.match(version.trim(), /^\d+\.\d+\.\d+$/)
})
