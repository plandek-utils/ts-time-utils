# `@plandek-utils/time-utils`

[![npm version](https://badge.fury.io/js/%40plandek-utils%2Ftime-utils.svg)](https://badge.fury.io/js/%40plandek-utils%2Ftime-utils)
[![Build Status](https://github.com/plandek-utils/ts-time-utils/actions/workflows/ci-master.yml/badge.svg)](https://github.com/plandek-utils/ts-time-utils/actions/workflows/ci-master.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/6e14835096c932a7887c/maintainability)](https://codeclimate.com/github/plandek-utils/ts-time-utils/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6e14835096c932a7887c/test_coverage)](https://codeclimate.com/github/plandek-utils/ts-time-utils/test_coverage)

[TypeDoc generated docs in here](https://plandek-utils.github.io/ts-time-utils)

[Github repo here](https://github.com/plandek-utils/ts-time-utils)

Small utils for managing Time in tests, using timekeeper for time manipulation.

## Installation

```bash
npm install @plandek-utils/time-utils
```

## Dependencies

This package has a peer dependency on [`timekeeper`](https://www.npmjs.com/package/timekeeper), which you'll need to install:

```bash
npm install timekeeper
```

## Usage

The package provides 2 functions:

- `freezeTime(time, fn)`: freezes time to the given one, executes the given function, and resets the time before returning the result of that execution.
- `freezeTimeAwait(time, asyncFn)`: same as `freezeTime()` but expects an async function, and it waits for its return before resetting the time

```typescript
// assume now is "2019-03-21T12:21:13.000Z"

function renderTime() {
  const d = new Date()
  console.log(d.toISOString())
}

renderTime() // => logs "2019-03-21T12:21:13.000Z"

const time = new Date("2018-01-02T13:14:15.123Z")
const res = freezeTime(time, () => { renderTime(); return 'blah' }) // => logs "2018-01-02T13:14:15.123Z"
console.log(res) // => logs 'blah' (freezeTime() returns the result of the passed function)

renderTime() // => logs "2019-03-21T12:21:13.010Z" (time is unfrozen, let's say that a 10ms have passed)
```

## Development

### Setup

1. Clone the repository
2. Install dependencies: `npm install`

### Development Workflow

1. Make your changes
2. Run tests: `npm test`
3. Run linter: `npm run check`
4. Commit using conventional commits: `npm run commit`

### Development, Commits, versioning and publishing

See [The Typescript-Starter docs](https://github.com/bitjson/typescript-starter#bump-version-update-changelog-commit--tag-release).

### Commits and CHANGELOG

For commits, you should use [`commitizen`](https://github.com/commitizen/cz-cli)

```sh
npm run commit
```

This project uses [conventional changelog](https://github.com/conventional-changelog/conventional-changelog) to manage releases. See the [standard-version](https://github.com/conventional-changelog/standard-version) documentation for more information on the workflow.

```sh
# bump package.json version, update CHANGELOG.md, git tag the release
npm run version
```

### Creating a Release

1. Run `npm run prepare-release` which will:
   - Reset the repo to a clean state
   - Run checks and tests
   - Create a new version using standard-version
   - Build the package
2. Push to git: `git push --follow-tags origin master`
3. The CI will automatically publish to npm when pushed to master
