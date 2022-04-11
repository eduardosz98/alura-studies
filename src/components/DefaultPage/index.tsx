import styles from './DefaultPage.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTheme from 'styles/Theme.module.scss';
import React from 'react';

export default function DefaultPage({ children }: { children?: React.ReactNode }) {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__text}>Code and magic</div>
			</header>
			<div className={stylesTheme.container}>
				<Outlet />
				{children}
			</div>
		</>
	);
}