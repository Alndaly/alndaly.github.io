import React from 'react';
import styles from './styles.module.css';

interface DocBanner {
	content: string;
}

export default function DocBanner(props: DocBanner) {
	const { content } = props;
	return (
		<div className={styles.docBanner}>
			<div className='content'>{content}</div>
		</div>
	);
}
