import React from 'react';
import {Nav} from "../Nav/Nav";
import s from './Header.module.scss'

export const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.headerContainer}>
				<Nav/>
			</div>
		</header>
	);
}