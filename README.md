cartesi-wallet-template
=================

A CLI app for setting up a simple Cartesi wallet interaction application using Javascript, Typescript and Rust language templates

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cartesi-wallet-template
$ cartesi-wallet-template COMMAND
running command...
$ cartesi-wallet-template (--version)
cartesi-wallet-template/0.2.6 darwin-arm64 node-v18.19.0
$ cartesi-wallet-template --help [COMMAND]
USAGE
  $ cartesi-wallet-template COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cartesi-wallet-template create NAME`](#cartesi-wallet-template-create-name)

## `cartesi-wallet-template create NAME`

Create application

```
USAGE
  $ cartesi-wallet-template create NAME --template javascript|typescript|rust [--branch <value>]

ARGUMENTS
  NAME  application and directory name

FLAGS
  --branch=<value>     [default: main] repository branch name to use
  --template=<option>  (required) template name to use
                       <options: javascript|typescript|rust>

DESCRIPTION
  Create application

EXAMPLES
  $ cartesi-wallet-template create myApp --template javascript
```

_See code: [src/commands/create.ts](https://github.com/gr4yha7/cartesi-wallet-template/blob/v0.2.6/src/commands/create.ts)_
<!-- commandsstop -->
