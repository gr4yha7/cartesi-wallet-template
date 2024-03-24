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
* [`create-cartesi-wallet-template hello PERSON`](#create-cartesi-wallet-template-hello-person)
* [`create-cartesi-wallet-template hello world`](#create-cartesi-wallet-template-hello-world)
* [`create-cartesi-wallet-template help [COMMAND]`](#create-cartesi-wallet-template-help-command)
* [`create-cartesi-wallet-template plugins`](#create-cartesi-wallet-template-plugins)
* [`create-cartesi-wallet-template plugins:install PLUGIN...`](#create-cartesi-wallet-template-pluginsinstall-plugin)
* [`create-cartesi-wallet-template plugins:inspect PLUGIN...`](#create-cartesi-wallet-template-pluginsinspect-plugin)
* [`create-cartesi-wallet-template plugins:install PLUGIN...`](#create-cartesi-wallet-template-pluginsinstall-plugin-1)
* [`create-cartesi-wallet-template plugins:link PLUGIN`](#create-cartesi-wallet-template-pluginslink-plugin)
* [`create-cartesi-wallet-template plugins:uninstall PLUGIN...`](#create-cartesi-wallet-template-pluginsuninstall-plugin)
* [`create-cartesi-wallet-template plugins reset`](#create-cartesi-wallet-template-plugins-reset)
* [`create-cartesi-wallet-template plugins:uninstall PLUGIN...`](#create-cartesi-wallet-template-pluginsuninstall-plugin-1)
* [`create-cartesi-wallet-template plugins:uninstall PLUGIN...`](#create-cartesi-wallet-template-pluginsuninstall-plugin-2)
* [`create-cartesi-wallet-template plugins update`](#create-cartesi-wallet-template-plugins-update)

## `create-cartesi-wallet-template hello PERSON`

Say hello

```
USAGE
  $ create-cartesi-wallet-template hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/gr4yha7/cartesi-hackathon/blob/v0.2.0/src/commands/hello/index.ts)_

## `create-cartesi-wallet-template hello world`

Say hello world

```
USAGE
  $ create-cartesi-wallet-template hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ create-cartesi-wallet-template hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/gr4yha7/cartesi-hackathon/blob/v0.2.0/src/commands/hello/world.ts)_

## `create-cartesi-wallet-template help [COMMAND]`

Display help for create-cartesi-wallet-template.

```
USAGE
  $ create-cartesi-wallet-template help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for create-cartesi-wallet-template.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.18/src/commands/help.ts)_

## `create-cartesi-wallet-template plugins`

List installed plugins.

```
USAGE
  $ create-cartesi-wallet-template plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ create-cartesi-wallet-template plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/index.ts)_

## `create-cartesi-wallet-template plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ create-cartesi-wallet-template plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ create-cartesi-wallet-template plugins add

EXAMPLES
  $ create-cartesi-wallet-template plugins add myplugin 

  $ create-cartesi-wallet-template plugins add https://github.com/someuser/someplugin

  $ create-cartesi-wallet-template plugins add someuser/someplugin
```

## `create-cartesi-wallet-template plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ create-cartesi-wallet-template plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ create-cartesi-wallet-template plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/inspect.ts)_

## `create-cartesi-wallet-template plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ create-cartesi-wallet-template plugins install PLUGIN...

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ create-cartesi-wallet-template plugins add

EXAMPLES
  $ create-cartesi-wallet-template plugins install myplugin 

  $ create-cartesi-wallet-template plugins install https://github.com/someuser/someplugin

  $ create-cartesi-wallet-template plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/install.ts)_

## `create-cartesi-wallet-template plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ create-cartesi-wallet-template plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ create-cartesi-wallet-template plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/link.ts)_

## `create-cartesi-wallet-template plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ create-cartesi-wallet-template plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-cartesi-wallet-template plugins unlink
  $ create-cartesi-wallet-template plugins remove

EXAMPLES
  $ create-cartesi-wallet-template plugins remove myplugin
```

## `create-cartesi-wallet-template plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ create-cartesi-wallet-template plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/reset.ts)_

## `create-cartesi-wallet-template plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ create-cartesi-wallet-template plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-cartesi-wallet-template plugins unlink
  $ create-cartesi-wallet-template plugins remove

EXAMPLES
  $ create-cartesi-wallet-template plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/uninstall.ts)_

## `create-cartesi-wallet-template plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ create-cartesi-wallet-template plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-cartesi-wallet-template plugins unlink
  $ create-cartesi-wallet-template plugins remove

EXAMPLES
  $ create-cartesi-wallet-template plugins unlink myplugin
```

## `create-cartesi-wallet-template plugins update`

Update installed plugins.

```
USAGE
  $ create-cartesi-wallet-template plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/update.ts)_
<!-- commandsstop -->
