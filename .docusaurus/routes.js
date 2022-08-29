import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '767'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '61d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'cad'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '0bc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '2e1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '8ed'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '022'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'de8'),
    exact: true
  },
  {
    path: '/blog/2022/08/19/',
    component: ComponentCreator('/blog/2022/08/19/', 'a3f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '18d'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags', 'b22'),
    exact: true
  },
  {
    path: '/docs/tags/curl',
    component: ComponentCreator('/docs/tags/curl', '71b'),
    exact: true
  },
  {
    path: '/docs/tags/git',
    component: ComponentCreator('/docs/tags/git', 'b6b'),
    exact: true
  },
  {
    path: '/docs/tags/vim',
    component: ComponentCreator('/docs/tags/vim', 'bde'),
    exact: true
  },
  {
    path: '/docs/tags/编辑器',
    component: ComponentCreator('/docs/tags/编辑器', '40a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '103'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '0e9'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'a8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/shell学习文档',
        component: ComponentCreator('/docs/category/shell学习文档', 'e56'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/vim学习文档',
        component: ComponentCreator('/docs/category/vim学习文档', 'cd2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/vite学习文档',
        component: ComponentCreator('/docs/category/vite学习文档', 'c6a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/第一天',
        component: ComponentCreator('/docs/category/第一天', '413'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Clash',
        component: ComponentCreator('/docs/Clash', '0c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Curl',
        component: ComponentCreator('/docs/Curl', '189'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Github/Actions',
        component: ComponentCreator('/docs/Github/Actions', 'b90'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Nginx',
        component: ComponentCreator('/docs/Nginx', '9eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Shell/conda',
        component: ComponentCreator('/docs/Shell/conda', '0b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Shell/grep',
        component: ComponentCreator('/docs/Shell/grep', 'd55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Shell/sed',
        component: ComponentCreator('/docs/Shell/sed', '51a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch00_read_this_first',
        component: ComponentCreator('/docs/Vim/ch00_read_this_first', '0ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch01_starting_vim',
        component: ComponentCreator('/docs/Vim/ch01_starting_vim', 'fe2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch02_buffers_windows_tabs',
        component: ComponentCreator('/docs/Vim/ch02_buffers_windows_tabs', 'b05'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch03_searching_files',
        component: ComponentCreator('/docs/Vim/ch03_searching_files', '19b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch04_vim_grammar',
        component: ComponentCreator('/docs/Vim/ch04_vim_grammar', '421'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch05_moving_in_file',
        component: ComponentCreator('/docs/Vim/ch05_moving_in_file', '8ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch06_insert_mode',
        component: ComponentCreator('/docs/Vim/ch06_insert_mode', '639'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch07_the_dot_command',
        component: ComponentCreator('/docs/Vim/ch07_the_dot_command', '101'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch08_registers',
        component: ComponentCreator('/docs/Vim/ch08_registers', '424'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch09_macros',
        component: ComponentCreator('/docs/Vim/ch09_macros', '2eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch10_undo',
        component: ComponentCreator('/docs/Vim/ch10_undo', 'd2c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch11_visual_mode',
        component: ComponentCreator('/docs/Vim/ch11_visual_mode', '932'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch12_search_and_substitute',
        component: ComponentCreator('/docs/Vim/ch12_search_and_substitute', 'f95'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch13_the_global_command',
        component: ComponentCreator('/docs/Vim/ch13_the_global_command', '8fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch14_external_commands',
        component: ComponentCreator('/docs/Vim/ch14_external_commands', '1bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch15_command-line_mode',
        component: ComponentCreator('/docs/Vim/ch15_command-line_mode', 'c37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch16_tags',
        component: ComponentCreator('/docs/Vim/ch16_tags', 'fa8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch17_fold',
        component: ComponentCreator('/docs/Vim/ch17_fold', 'c21'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch18_git',
        component: ComponentCreator('/docs/Vim/ch18_git', 'de9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch19_compile',
        component: ComponentCreator('/docs/Vim/ch19_compile', 'a9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch20_views_sessions_viminfo',
        component: ComponentCreator('/docs/Vim/ch20_views_sessions_viminfo', 'aba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch21_multiple_file_operations',
        component: ComponentCreator('/docs/Vim/ch21_multiple_file_operations', '2fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch22_vimrc',
        component: ComponentCreator('/docs/Vim/ch22_vimrc', '3f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch23_vim_packages',
        component: ComponentCreator('/docs/Vim/ch23_vim_packages', '8cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vim/ch24_vim_runtime',
        component: ComponentCreator('/docs/Vim/ch24_vim_runtime', '2f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vite/Day01/start',
        component: ComponentCreator('/docs/Vite/Day01/start', '3ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/心理学/',
        component: ComponentCreator('/docs/心理学/', '872'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ca2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
