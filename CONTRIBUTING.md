## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- Consider starting the commit message with an applicable emoji:
  - :art: `:art:` when improving the format/structure of the code
  - :racehorse: `:racehorse:` when improving performance
  - :non-potable_water: `:non-potable_water:` when plugging memory leaks
  - :memo: `:memo:` when writing docs
  - :penguin: `:penguin:` when fixing something on Linux
  - :apple: `:apple:` when fixing something on macOS
  - :checkered_flag: `:checkered_flag:` when fixing something on Windows
  - :bug: `:bug:` when fixing a bug
  - :fire: `:fire:` when removing code or files
  - :green_heart: `:green_heart:` when fixing the CI build
  - :white_check_mark: `:white_check_mark:` when adding tests
  - :lock: `:lock:` when dealing with security
  - :arrow_up: `:arrow_up:` when upgrading dependencies
  - :arrow_down: `:arrow_down:` when downgrading dependencies
  - :shirt: `:shirt:` when removing linter warnings

### TypeScript Styleguide

All TypeScript must adhere to the [Standard JS styleguide](https://standardjs.com/) rules, this is implemented via `prettier` and `tslint` which will run automatically on commit. In VS Code you can use the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to format on the fly.

In addition to the Standard JS rules please follow these guidelines for super attractive code goodness.

- Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
- Inline `export`s with expressions whenever possible

  ```js
  // Use this:
  export default class ClassName {

  }

  // Instead of:
  class ClassName {

  }
  export default ClassName
  ```

- Place requires in the following order:

  - Built in Node Modules (such as `path`)
  - Node Modules from NPM (such as `lodash`)
  - Local Modules (using relative paths)

- Place class properties in the following order:

  - Class methods and properties (methods starting with `static`)
  - Instance methods and properties

- Avoid platform-dependent code wherever possible

## Tests

This repository uses [Jest](https://jestjs.io/en/) for unit testing, we are proudly rocking [![Coverage Status](https://coveralls.io/repos/github/cahilfoley/utils/badge.svg?branch=master)](https://coveralls.io/github/cahilfoley/utils?branch=master) and are commtted to maintaing this on every release. Please make sure that any pull requests have full test coverage if you're able to or ask for help in the PR.

### Running Tests Locally

To run tests during development you can run these commands (optionally adding `--watch` to the end to watch for file changes).

```bash
yarn test
```

or if you prefer npm

```bash
npm run test
```
