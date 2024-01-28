# Contribuer

Merci de l'intérêt que tu portes à ce projet. Les contributions sont les bienvenues.

> [!IMPORTANT]
> Bien que cette page soit disponible en français, toutes les contributions, qu'il s'agisse de *pull requests*, d'*issues* ou de discussions sur GitHub, devraient **préférer l'anglais pour communiquer**.

[[toc]]

## Types de contributions

Toutes les contributions sont les bienvenues, qu'il s'agisse :

- De signaler des problèmes/suggérer des idées au moyen d'[*issues*](https://github.com/MaelImhof/dsd.mael.im/issues) ou de [discussions](https://github.com/MaelImhof/dsd.mael.im/discussions)
- De travail graphique avec le logo ou les couleurs du site
- D'écriture de nouveaux tutoriels ou de revisite de tutoriels existants
- De traductions
- De toute autre contribution qui te vient en tête

Les contributions touchant aux tutoriels devraient **préférablement être réalisées au moyen de *pull-requests***, de même pour les traductions. Se référer au [guide suivant](#effectuer-une-pull-request).

## Effectuer une *pull-request*

1) Crée un [*fork* du *repo* GitHub de dsd.mael.im](https://github.com/MaelImhof/dsd.mael.im/fork) et effectue tes modifications sur une nouvelle branche.
2) Une fois les modifications terminées, effectue une *pull-request* depuis le fork vers le *repo* original.

[Plus d'informations](https://docs.github.com/fr/get-started/exploring-projects-on-github/contributing-to-a-project)

## Environnement de développement

[Node.js](https://nodejs.org/en) est requis pour faire fonctionner le projet sur ta machine.

Dsd.mael.im fonctionne grâce à [VitePress](https://vitepress.dev/).

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

La commande suivante lancera un serveur de développement local. Ce serveur sera mis à jour dès qu'un fichier sera modifié.

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
