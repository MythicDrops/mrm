# @mythicdrops/semantic-release-gradle-config

[**semantic-release**](https://github.com/semantic-release/semantic-release) shareable config to publish MythicDrops
Gradle projects to Maven Central.

## Prerequisites

- Node >= 14
- npm ^7
- Gradle >= 6.8.2

## Plugins

This shareable configuration use the following plugins:

- [`@semantic-release/changelog`](https://github.com/semantic-release/changelog)
- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/git`](https://github.com/semantic-release/git)
- [`@semantic-release/github`](https://github.com/semantic-release/github)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@mythicdrops/semantic-release-sonatype`](https://github.com/MythicDrops/semantic-release-sonatype)

## Install

```bash
$ npm install --save-dev semantic-release @mythicdrops/semantic-release-gradle-config
```

## Usage

The shareable config can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "extends": "@mythicdrops/semantic-release-gradle-config"
}
```

## Configuration

See each [plugin](#plugins) documentation for required installation and configuration steps.

## Releases

Supported release branches can now happen as below:

- regular releases to the default distribution channel from the branch `main`
- regular releases to a distribution channel matching the branch name from any
  existing branch with a name matching a maintenance release range (`N.N.x` or
  `N.x.x` or `N.x` with `N` being a number)
- regular releases to the `next` distribution channel from the branch `next` if it exists
- regular releases to the `next-major` distribution channel from the branch
  `next-major` if it exists
- prereleases to the `beta` distribution channel from the branch `beta` if it exists
- prereleases to the `alpha` distribution channel from the branch `alpha` if it exists
