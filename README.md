# VCH Blog

Vladyslav Chychuzhko Personal Blog.

## Deployment

Before deploying set **BASE_URL** variable in `.env` file or pass it during build:

```sh
BASE_URL=http://localhost:5173 npm run docs:build
```

This is required for proper OpenGraph urls.

## Customize configuration

See [VitePress Configuration Reference](https://vitepress.dev/reference/site-config).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run docs:dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run docs:build
```

### Generate Favicons and Meta information

```sh
npm run generate-pwa-assets
```

---

###### Built with [VitePress](https://vitepress.dev/guide/getting-started)
