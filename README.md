oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g create-cartesi-wallet-template
$ create-cartesi-wallet-template COMMAND
running command...
$ create-cartesi-wallet-template (--version)
create-cartesi-wallet-template/0.2.0 darwin-arm64 node-v18.19.0
$ create-cartesi-wallet-template --help [COMMAND]
USAGE
  $ create-cartesi-wallet-template COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`create-cartesi-wallet-template create backend NAME`](#create-cartesi-wallet-template-create-backend-name)
* [`create-cartesi-wallet-template create frontend NAME`](#create-cartesi-wallet-template-create-frontend-name)

## `create-cartesi-wallet-template create backend NAME`

Create application

```
USAGE
  $ create-cartesi-wallet-template create backend NAME --template javascript|typescript|rust [--branch <value>]

ARGUMENTS
  NAME  application and directory name

FLAGS
  --branch=<value>     [default: sdk-0.2] sunodo/sunodo-templates repository branch name to use
  --template=<option>  (required) template name to use
                       <options: javascript|typescript|rust>

DESCRIPTION
  Create application

EXAMPLES
  $ create-cartesi-wallet-template create backend
```

_See code: [src/commands/create/backend.ts](https://github.com/gr4yha7/cartesi-hackathon/blob/v0.2.0/src/commands/create/backend.ts)_

## `create-cartesi-wallet-template create frontend NAME`

Create application

```
USAGE
  $ create-cartesi-wallet-template create frontend NAME [--branch <value>]

ARGUMENTS
  NAME  application and directory name

FLAGS
  --branch=<value>  [default: main] repository branch name to use

DESCRIPTION
  Create application

EXAMPLES
  $ create-cartesi-wallet-template create frontend
```

_See code: [src/commands/create/frontend.ts](https://github.com/gr4yha7/cartesi-hackathon/blob/v0.2.0/src/commands/create/frontend.ts)_
<!-- commandsstop -->
