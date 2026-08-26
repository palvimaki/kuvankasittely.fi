import { readFile } from 'node:fs/promises'

const packageJson = JSON.parse(await readFile('package.json', 'utf8'))
const packageLock = JSON.parse(await readFile('package-lock.json', 'utf8'))
const lockRoot = packageLock.packages?.['']

if (!lockRoot || typeof lockRoot !== 'object') {
  throw new Error('package-lock.json has no root package metadata')
}

const checks = [
  ['package-lock.json name', packageLock.name, packageJson.name],
  ['package-lock.json version', packageLock.version, packageJson.version],
  ['package-lock.json root name', lockRoot.name, packageJson.name],
  ['package-lock.json root version', lockRoot.version, packageJson.version],
]

const failures = checks
  .filter(([, actual, expected]) => actual !== expected)
  .map(([field, actual, expected]) => `${field} is ${JSON.stringify(actual)}; expected ${JSON.stringify(expected)}`)

if (failures.length > 0) {
  throw new Error(`Package metadata mismatch:\n${failures.join('\n')}`)
}

console.log(`Package metadata matches: ${packageJson.name}@${packageJson.version}`)
