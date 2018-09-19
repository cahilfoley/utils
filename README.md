# @cahil/utils

![Greenkeeper Badge](https://badges.greenkeeper.io/cahilfoley/utils.svg)
[![Coverage Status](https://coveralls.io/repos/github/cahilfoley/utils/badge.svg?branch=master)](https://coveralls.io/github/cahilfoley/utils?branch=master)
[![Build Status](https://travis-ci.org/cahilfoley/utils.svg?branch=master)](https://travis-ci.org/cahilfoley/utils)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/github/license/cahilfoley/utils.svg)](https://github.com/cahilfoley/utils/blob/master/LICENSE)
[![NPM](https://img.shields.io/npm/v/@cahil/utils.svg)](https://www.npmjs.com/package/@cahil/utils)

Various utilities to assist when developing JS or TS projects, check out the [documentation](https://cahilfoley.github.io/utils/).

## Installation

Using npm

```
npm install @cahil/utils
```

Or with yarn

```
yarn add @cahil/utils
```

## Usage

The recommended way to use the library is to import only the functions that you need. For example, to use the camelToTitle function from the transforms library you would use:

```js
// Best 👍
import camelToTitle from '@cahil/utils/transforms/camelToTitle'
```

However, if you prefer, you can also import from the libraries or root directly.

```js
// Still not too bad
import { camelToTitle } from '@cahil/utils/transforms'

// OR

// I hope you've got some good tree shaking 🌴👎
import { camelToTitle } from '@cahil/utils'
```
