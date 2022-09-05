// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	// 自定义字段
	customFields: {
		// 注意benAnField会直接当作html渲染 所以此处一定要注意xss攻击的安全性
		benAnFields: {
			beiAnId: '浙ICP备2020037204号-3',
			policeImg: '/img/police.png',
			wangAnId: '浙公网安备 33011002015700号',
			recordCode: '33011002015700',
		},
	},
	themes: [
		// ... Your other themes.
		// [
		// 	require.resolve('@easyops-cn/docusaurus-search-local'),
		// 	{
		// 		// ... Your options.
		// 		// `hashed` is recommended as long-term-cache of index file is possible.
		// 		hashed: true,
		// 		// For Docs using Chinese, The `language` is recommended to set to:
		// 		// ```
		// 		// language: ["en", "zh"],
		// 		// ```
		// 	},
		// ],
	],
	title: '陌上见花开',
	tagline: 'Kinda的个人网站',
	url: 'https://kinda.info',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'zh-Hans',
		locales: ['en', 'zh-Hans'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.scss'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			algolia: {
				// The application ID provided by Algolia
				appId: '2HQC3PTDZ8',

				// Public API key: it is safe to commit it
				apiKey: 'dc070f617070cfef49bb1c58359522b4',

				indexName: 'kinda',

				// Optional: see doc section below
				contextualSearch: true,

				// Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
				externalUrlRegex: 'external\\.com|domain\\.com',

				// Optional: Algolia search parameters
				searchParameters: {},

				// Optional: path for search page that enabled by default (`false` to disable it)
				searchPagePath: 'search',

				//... other Algolia params
			},
			liveCodeBlock: {
				/**
				 * The position of the live playground, above or under the editor
				 * Possible values: "top" | "bottom"
				 */
				playgroundPosition: 'bottom',
			},
			docs: {
				sidebar: {
					hideable: true,
				},
			},
			navbar: {
				hideOnScroll: true,
				title: 'Kinda',
				// logo: {
				// 	alt: 'My Site Logo',
				// 	src: 'img/logo.svg',
				// },
				items: [
					{
						to: '/docs/',
						label: '文档',
						position: 'left',
					},
					{ to: '/blog', label: '博客', position: 'left' },
					{
						href: 'https://github.com/facebook/docusaurus',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/facebook/docusaurus',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Kinda.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
	plugins: ['@docusaurus/theme-live-codeblock', 'docusaurus-plugin-sass'],
};

module.exports = config;
