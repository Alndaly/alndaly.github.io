import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router';
import { useThemeConfig } from '@docusaurus/theme-common';
import { throttle } from 'lodash';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {
	useHideableNavbar,
	useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import styles from './styles.module.css';
function NavbarBackdrop(props) {
	return (
		<div
			role='presentation'
			{...props}
			className={clsx('navbar-sidebar__backdrop', props.className)}
		/>
	);
}

export default function NavbarLayout({ children }) {
	const {
		navbar: { hideOnScroll, style },
	} = useThemeConfig();
	const showTop = () => {
		var scrollTop =
			document.body.scrollTop || document.documentElement.scrollTop;
		if (scrollTop >= 50) {
			// 如果接近于顶部，则NavBar变透明
			setNavBarUnTransparency(true);
			return;
		}
		setNavBarUnTransparency(false);
	};
	const isBrowser = useIsBrowser();
	if(isBrowser){
		window.onscroll = throttle(showTop, 100)
	}
	const mobileSidebar = useNavbarMobileSidebar();
	const [navBarUnTransparency, setNavBarUnTransparency] = useState(false);
	const [currentPath, setCurrentPath] = useState('/');
	const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
	const path = useLocation().pathname;
	useEffect(() => {
		setCurrentPath(path);
	}, []);

	return (
		<nav
			ref={navbarRef}
			className={clsx(
				'navbar',
				'navbar--fixed-top',
				styles.commonNavBar,
				currentPath === '/'
					? navBarUnTransparency
						? styles.unTransparencyNavBar
						: styles.transparencyNavBar
					: styles.unTransparencyNavBar,
				hideOnScroll &&
					currentPath !== '/' &&
					[
						styles.navbarHideable,
						!isNavbarVisible && styles.navbarHidden,
					],
				{
					'navbar--dark': style === 'dark',
					'navbar--primary': style === 'primary',
					'navbar-sidebar--show': mobileSidebar.shown,
				}
			)}>
			{children}
			<NavbarBackdrop onClick={mobileSidebar.toggle} />
			<NavbarMobileSidebar />
		</nav>
	);
}
