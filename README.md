# `worker-typescript-template` 🦕

This is a minimal starter for building a new Cloudflare Workers project that uses TypeScript, Hono, Miniflare, esbuild and Vitest. Use this starter to build your new best thing ヾ(๑╹◡╹)ﾉ"

[![Maintainability](https://api.codeclimate.com/v1/badges/3fa5244eb03be0aa2681/maintainability)](https://codeclimate.com/github/denis-avakov/worker-typescript-template/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/3fa5244eb03be0aa2681/test_coverage)](https://codeclimate.com/github/denis-avakov/worker-typescript-template/test_coverage) [![Test](https://github.com/denis-avakov/worker-typescript-template/actions/workflows/test.yml/badge.svg)](https://github.com/denis-avakov/worker-typescript-template/actions/workflows/test.yml)

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner2-direct.svg)](https://stand-with-ukraine.pp.ua)

## How to use

1. Rename the `wrangler.example.toml` to `wrangler.toml` and populate the variables
2. Run `pnpm run dev` in your terminal to start a development server
3. Open a browser at `http://127.0.0.1:8787/` to see your worker in action
4. Make HTTP requests to `/cdn-cgi/mf/scheduled` to trigger scheduled events

```shell
# Install dependencies
$ pnpm install

# Start local development server with live reload
$ pnpm run dev

# Start remote development server using wrangler
$ pnpm run dev:remote

# Run tests
$ pnpm run test

# Run coverage test report
$ pnpm run coverage

# Deploy using wrangler
$ pnpm run deploy
```
