# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.1.0](https://github.com/plandek-utils/time-utils/compare/v2.0.4...v2.1.0) (2024-11-06)


### Features

* adapt to new project structure ([08cc23e](https://github.com/plandek-utils/time-utils/commit/08cc23e33952b8914e69780c2babc4237ef6d095))

### [2.0.4](https://github.com/plandek-utils/ts-time-utils/compare/v2.0.3...v2.0.4) (2021-02-05)

### [2.0.3](https://github.com/plandek-utils/ts-time-utils/compare/v2.0.2...v2.0.3) (2021-02-05)

### [2.0.2](https://github.com/plandek-utils/ts-time-utils/compare/v2.0.1...v2.0.2) (2021-02-05)

### [2.0.1](https://github.com/plandek-utils/ts-time-utils/compare/v2.0.0...v2.0.1) (2020-05-12)


### Bug Fixes

* target ES2017 instead of esnext for module, and ES2015 for main ([c6ccff2](https://github.com/plandek-utils/ts-time-utils/commit/c6ccff24aebf2dc5a3747f9ddbe12819572f2de7))
* **deps:** [security] bump acorn from 6.3.0 to 6.4.1 ([#66](https://github.com/plandek-utils/ts-time-utils/issues/66)) ([f5f8ec0](https://github.com/plandek-utils/ts-time-utils/commit/f5f8ec0f08dcab17189c9333067e70c0c623ea41))

## [2.0.0](https://github.com/plandek-utils/ts-time-utils/compare/v1.1.1...v2.0.0) (2020-04-15)


### ⚠ BREAKING CHANGES

* In v1.x dayjs objects were supported. This ended up being problematic because of
issues with dayjs versions. It also added a dependency that is not strictly needed. That's why from
v2.x on dayjs is no longer supported and it is removed as a dependency

### Features

* drop dayjs support + ensure unfreeze time if errors ([807e4b5](https://github.com/plandek-utils/ts-time-utils/commit/807e4b515580c8f2cd9e6799b4eff5bc32413500))

### [1.1.1](https://github.com/plandek-utils/ts-time-utils/compare/v1.1.0...v1.1.1) (2020-04-14)


### Bug Fixes

* **deps:** bump dayjs from 1.8.19 to 1.8.20 ([#51](https://github.com/plandek-utils/ts-time-utils/issues/51)) ([c50e5a5](https://github.com/plandek-utils/ts-time-utils/commit/c50e5a568074939f7f74b2622308f754e656d88d))
* **deps:** bump dayjs from 1.8.20 to 1.8.21 ([#58](https://github.com/plandek-utils/ts-time-utils/issues/58)) ([0d09391](https://github.com/plandek-utils/ts-time-utils/commit/0d09391cb7363a848c7f89e02a0fdd699c51fe00))

## [1.1.0](https://github.com/plandek-utils/ts-time-utils/compare/v1.0.0...v1.1.0) (2020-01-06)


### Features

* **deps:** update dayjs to latest ([8f7eb3c](https://github.com/plandek-utils/ts-time-utils/commit/8f7eb3cfc4974dd01f27b9ba96ea56b36288ae30))


### Bug Fixes

* **deps:** bump dayjs from 1.8.16 to 1.8.18 ([#21](https://github.com/plandek-utils/ts-time-utils/issues/21)) ([29e5bac](https://github.com/plandek-utils/ts-time-utils/commit/29e5baca0a1a3f5e658c689faca9534784346eb5))

## 1.0.0 (2019-11-05)


### Features

* initial implementation of `freezeTime` and `freezeTimeAwait` ([c4df449](https://github.com/plandek-utils/ts-time-utils/commit/c4df449c841b56faa392117b4d682efc99c20387))
