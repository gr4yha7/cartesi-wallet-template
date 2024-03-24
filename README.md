create-cartesi-wallet-template
=================

A CLI app for setting up a simple Cartesi wallet interaction application using Javascript, Typescript and Rust language templates

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
create-cartesi-wallet-template/0.2.4 darwin-arm64 node-v18.19.0
$ create-cartesi-wallet-template --help [COMMAND]
USAGE
  $ create-cartesi-wallet-template COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`create-cartesi-wallet-template create NAME`](#create-cartesi-wallet-template-create-name)

## `create-cartesi-wallet-template create NAME`

Create application

```
USAGE
  $ create-cartesi-wallet-template create NAME --template javascript|typescript|rust [--branch <value>]

ARGUMENTS
  NAME  application and directory name

FLAGS
  --branch=<value>     [default: main] repository branch name to use
  --template=<option>  (required) template name to use
                       <options: javascript|typescript|rust>

DESCRIPTION
  Create application

EXAMPLES
  $ create-cartesi-wallet-template create
```

_See code: [src/commands/create.ts](https://github.com/gr4yha7/cartesi-hackathon/blob/v0.2.4/src/commands/create.ts)_
<!-- commandsstop -->
