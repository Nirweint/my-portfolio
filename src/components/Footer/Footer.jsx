import React from 'react';
import s from './Footer.module.css';
import styleContainer from "../../common/styles/Container.module.css";
import {Title} from "../../common/components/Title/Title";

export const Footer = () => {
	return (
		<footer className={s.footerBlock}>
			<div className={`${styleContainer.container} ${s.footerContainer}`}>
				<Title text={'Alexander Vakulich'}/>
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