import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'miniflare',
    environmentOptions: {
      bindings: { EXAMPLE_ENVIRONMENT_VARIABLE: 'value' },
      kvNamespaces: ['EXAMPLE_KV_NAMESPACE']
    }
  },
  resolve: {
    alias: {
      '~': './src'
    }
  }
});
