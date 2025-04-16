import type { Configuration as WebpackConfig } from 'webpack';

const config = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'], // 👈 corrigido caminho
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  },
  webpackFinal: (config: WebpackConfig) => {
    config.resolve!.modules!.push(`${process.cwd()}/src`);
    return config;
  }
};

export default config;
