import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
export default function FooterCopyright({ copyright }) {
	const docusaurusContext = useDocusaurusContext();
	const [copyRightHtml, setCopyRightHtml] = useState(copyright);
	const { beiAnId, policeImg, wangAnId, recordCode } =
		docusaurusContext.siteConfig.customFields.benAnFields;
	useEffect(() => {
		setCopyRightHtml((prevCopyRight) => {
			const newCopyRight = `${prevCopyRight} <a href="https://beian.miit.gov.cn/" target="_blank">${beiAnId}</a> <img src="${policeImg}"/> <a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${recordCode}' target='_blank'>${wangAnId}</a>`;
			return newCopyRight;
		});
	}, [copyright]);
	return (
		<div
			className='footer__copyright'
			// Developer provided the HTML, so assume it's safe.
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{ __html: copyRightHtml }}
		/>
	);
}
