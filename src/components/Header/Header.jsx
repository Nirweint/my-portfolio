import React from 'react';
import s from './Header.module.scss'
import {Nav} from "../Nav/Nav";
import styleContainer from "../../common/styles/Container.module.css";

export const Header = () => {
	return (
		<header className={s.header}>
			<div className={`${styleContainer.container} ${s.headerContainer}`}>
				<Nav/>
			</div>
		</header>
	);
}