import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: 'ts-jest',
    testEnvironment: 'miniflare',
    testEnvironmentOptions: {
      bindings: { EXAMPLE_ENVIRONMENT_VARIABLE: '' },
      kvNamespaces: ['EXAMPLE_KV_NAMESPACE']
    }
  };
};
