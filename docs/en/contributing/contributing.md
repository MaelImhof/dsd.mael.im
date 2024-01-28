# Contribute

Thank you for your interest in this project. All contributions are welcome.

> [!IMPORTANT]
> Although this page is also available in French, all contributions, whether pull requests, issues or discussions on GitHub, should **prefer English to communicate**.

[[toc]]

## Types of contributions

All contributions are welcome, whether :

- Reporting issues/suggesting ideas through [issues](https://github.com/MaelImhof/dsd.mael.im/issues) or [discussions](https://github.com/MaelImhof/dsd.mael.im/discussions)
- Graphic design, be it working on the logo or on the colors of the website
- Writing new tutorials or revisiting existing ones
- Translations
- Any other contribution you can think of

Contributions relating to tutorials should **preferably be made using pull-requests**, as should translations. Refer to the [following guide](#perform-a-pull-request).

## Perform a pull-request

1) Create a [fork of the dsd.mael.im GitHub repo](https://github.com/MaelImhof/dsd.mael.im/fork) and make your changes on a new branch.
2) Once you've finished making changes, perform a pull-request from the fork to the original repo.

[More information](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)

## Development environment

[Node.js](https://nodejs.org/en) is required to run the project on your machine.

Dsd.mael.im runs on [VitePress](https://vitepress.dev/).

::: code-group

```sh [npm]
$ npm install
```

```sh [pnpm]
$ pnpm install
```

```sh [yarn]
$ yarn install
```

:::

The following command will launch a local development server. This server will be updated as soon as a file is modified.

::: code-group

```sh [npm]
$ npm run dev
```

```sh [pnpm]
pnpm run dev
```

```sh [yarn]
yarn run dev
```

:::