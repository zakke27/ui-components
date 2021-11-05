import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'dr-ui-components',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  navs: {
    'zh-CN': [
      { title: '组件', path: '/components' },
      {
        title: 'GitHub',
        path: 'https://github.com/umijs/dumi',
      },
    ],
    'en-US': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'GitHub',
        path: 'https://github.com/umijs/dumi',
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
