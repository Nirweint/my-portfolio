import React from 'react';
import s from './Footer.module.css';
import styleContainer from "../../common/styles/Container.module.css";

export const Footer = () => {
	return (
		<footer className={s.footerBlock}>
			<div className={`${styleContainer.container} ${s.footerContainer}`}>
				<h2 className={s.title}>Alexander Vakulich</h2>
				<div className={s.icons}>
					<div className={s.icon}></div>
					<div className={s.icon}></div>
					<div className={s.icon}></div>
					<div className={s.icon}></div>
				</div>
				<p>© 2021 All rights reserved</p>
			</div>
		</footer>
	);
}