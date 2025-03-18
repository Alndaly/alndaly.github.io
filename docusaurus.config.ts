import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Alndaly',
  tagline: 'Alndaly的个人网站',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://alndaly.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Alndaly', // Usually your GitHub org/user name.
  projectName: 'alndaly.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Alndaly/alndaly.github.io/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    [
      '@docusaurus/preset-classic',
      {
        gtag: {
          trackingID: 'G-GH52E616NM',
          anonymizeIP: true,
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      hideOnScroll: true,
      title: 'Kinda',
      // logo: {
      // 	alt: 'Kinda',
      // 	src: 'img/logo.png',
      // },
      items: [
        {
          to: '/docs/frontend/',
          label: '前端',
          position: 'left',
        },
        {
          to: '/docs/photograph/',
          label: '摄影',
          position: 'left',
        },
        {
          to: '/docs/health/',
          label: '健康',
          position: 'left',
        },
        {
          to: '/docs/finance/',
          label: '金融',
          position: 'left',
        },
        {
          to: '/docs/backend/',
          label: '服务端',
          position: 'left',
        },
        {
          to: '/docs/artificial-intelligence/',
          label: '人工智能',
          position: 'left',
        },
        {
          to: '/docs/color-modulation/',
          label: '色彩',
          position: 'left',
        },
        {
          to: '/docs/tools/',
          label: '工具',
          position: 'left',
        },
        {
          to: '/docs/others/',
          label: '杂项',
          position: 'left',
        },
        { href: 'https://kinda.info', label: '博客', position: 'right' },
        {
          href: 'https://uniapi.top',
          label: 'UniAPI',
          position: 'right',
        },
        {
          href: 'https://github.com/alndaly/alndaly.github.io/tree/master',
          label: 'GitHub',
          position: 'right',
        },
        {
          label: 'Link',
          href: 'https://link.qingyon.com',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/alndaly/alndaly.github.io/tree/master',
            },
          ],
        },
        {
          title: '项目列表',
          items: [
            {
              label: 'UniAPI',
              href: 'https://uniapi.top',
            },
            {
              label: 'Link',
              href: 'https://link.qingyon.com',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kinda.`,
    },
    prism: {
      additionalLanguages: ['swift', 'bash', 'java', 'groovy'],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    '@docusaurus/theme-live-codeblock',
    'docusaurus-plugin-sass'
  ],
};

export default config;
