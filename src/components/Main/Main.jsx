import React from 'react';
import s from './Main.module.scss';
import styleContainer from '../../common/styles/Container.module.css'
import {Header} from "../Header/Header";

export const Main = () => {
	return (
		<div className={s.mainBlock}>
			<Header/>
			<div className={`${styleContainer.container} ${s.mainContainer}`}>
				<div className={s.text}>
					<h2>Hello, I am <span className={s.highlight}>Alexander Vakulich</span></h2>
					<p className={s.secondTitle}>I am a Frontend developer.</p>
				</div>
				<div className={s.photo}>
				</div>
			</div>
		</div>
	);
}