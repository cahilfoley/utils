# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.1.2](https://github.com/cahilfoley/utils/compare/v2.1.0...v2.1.2) (2019-07-17)

### Build System

- **deps:** bump lodash.template from 4.4.0 to 4.5.0 ([#62](https://github.com/cahilfoley/utils/issues/62)) ([19a93f0](https://github.com/cahilfoley/utils/commit/19a93f0))

## [2.1.0](https://github.com/cahilfoley/utils/compare/v2.0.1...v2.1.0) (2019-07-16)

### Features

- **async:** add makeCancelable and pause functions ([#64](https://github.com/cahilfoley/utils/issues/64)) ([37132d0](https://github.com/cahilfoley/utils/commit/37132d0))

### [2.0.1](https://github.com/cahilfoley/utils/compare/v2.0.0...v2.0.1) (2019-06-26)

### Bug Fixes

- **validation:** remove potential regex crash ([1191997](https://github.com/cahilfoley/utils/commit/1191997))

### Build System

- **ci:** Travis CI Build Improvements ([#48](https://github.com/cahilfoley/utils/issues/48)) ([92d42e7](https://github.com/cahilfoley/utils/commit/92d42e7))

### Tests

- **validation:** add catastrophic backtracking test case ([ed7f11e](https://github.com/cahilfoley/utils/commit/ed7f11e))

## [2.0.0](https://github.com/cahilfoley/utils/compare/v1.3.1...v2.0.0) (2019-05-26)

### Build System

- copy changelog to dist folder ([8974bb8](https://github.com/cahilfoley/utils/commit/8974bb8))

### Features

- **accessors:** add pick function ([ad55229](https://github.com/cahilfoley/utils/commit/ad55229))
- **flatten:** update flatted type signature to allow for atleast single level nested sub-arrays ([8eb0efc](https://github.com/cahilfoley/utils/commit/8eb0efc))
- **accessors:** update get/set methods to allow for arrays to be traversed (#45) ([9207675](https://github.com/cahilfoley/utils/commit/9207675)), closes [#45](https://github.com/cahilfoley/utils/issues/45)

### BREAKING CHANGES

- The `get` and `set` methods will now process numeric paths as array indicies. This is probably the expected behaviour but wasn't how it previously worked and is therefore a breaking change.

## [1.3.1](https://github.com/cahilfoley/utils/compare/v1.3.0...v1.3.1) (2019-04-09)

# [1.3.0](https://github.com/cahilfoley/utils/compare/v1.2.4...v1.3.0) (2019-04-09)

### Features

- **function:** add partial function helper ([e7df3b2](https://github.com/cahilfoley/utils/commit/e7df3b2))

<a name="1.2.4"></a>

## [1.2.4](https://github.com/cahilfoley/utils/compare/v1.2.3...v1.2.4) (2018-12-10)

### Bug Fixes

- **isValidURL:** allow slashes in query strings ([8a28ddf](https://github.com/cahilfoley/utils/commit/8a28ddf))

<a name="1.2.3"></a>

## [1.2.3](https://github.com/cahilfoley/utils/compare/v1.2.2...v1.2.3) (2018-10-19)

### Bug Fixes

- **internal:** Fix validURL regex pattern ([ddb79cb](https://github.com/cahilfoley/utils/commit/ddb79cb))

<a name="1.2.2"></a>

## [1.2.2](https://github.com/cahilfoley/utils/compare/v1.2.1...v1.2.2) (2018-10-19)

### Bug Fixes

- **internal:** Add handler for same domain hosts ([89e4d74](https://github.com/cahilfoley/utils/commit/89e4d74))

<a name="1.2.1"></a>

## [1.2.1](https://github.com/cahilfoley/utils/compare/v1.2.0...v1.2.1) (2018-10-19)

### Bug Fixes

- **internal:** Fix URL pattern to match local ([0c2a363](https://github.com/cahilfoley/utils/commit/0c2a363))

<a name="1.2.0"></a>

# [1.2.0](https://github.com/cahilfoley/utils/compare/v1.1.0...v1.2.0) (2018-10-09)

### Bug Fixes

- **transforms:** handle array of strings as input to `toProperList` ([7d9ae22](https://github.com/cahilfoley/utils/commit/7d9ae22))

### Features

- **array:** add `flatten` function ([#21](https://github.com/cahilfoley/utils/issues/21)) ([c5f7c03](https://github.com/cahilfoley/utils/commit/c5f7c03))

<a name="1.1.0"></a>

# [1.1.0](https://github.com/cahilfoley/utils/compare/v1.0.5...v1.1.0) (2018-09-21)

### Features

- **array:** add `filterBy` function ([#10](https://github.com/cahilfoley/utils/issues/10)) ([d0d4e35](https://github.com/cahilfoley/utils/commit/d0d4e35))
- **array:** add `flatMap` function ([28d44bd](https://github.com/cahilfoley/utils/commit/28d44bd))
- **array:** add `partitionArray` function ([7bb0246](https://github.com/cahilfoley/utils/commit/7bb0246))
