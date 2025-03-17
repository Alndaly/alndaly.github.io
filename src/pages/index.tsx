import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import DocBanner from '../components/DocBanner';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className='container'>
				<Heading as='h1' className='hero__title'>
					{siteConfig.title}
				</Heading>
				<p className='hero__subtitle'>{siteConfig.tagline}</p>
			</div>
		</header>
	);
}

export default function Home(): ReactNode {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`你好，这里是${siteConfig.title}`}
			description='这里存放我的个人一些技术倾向的内容，但由于当下AI搜索已经较为完善了，本网站更新会较少。'>
			<HomepageHeader />
		</Layout>
	);
}
