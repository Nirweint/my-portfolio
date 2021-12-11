import React from 'react';
import s from './Main.module.css';
import styleContainer from '../../common/styles/Container.module.css'

export const Main = () => {
	return (
		<div className={s.mainBlock}>
			<div className={`${styleContainer.container} ${s.mainContainer}`}>
				<div className={s.text}>
					<h2>Hello, I'm <span className={s.highlight}>Alexander Vakulich</span>.</h2>
					<p>I'm a Frontend developer.</p>
				</div>
				<div className={s.photo}>
				</div>
			</div>
		</div>
	);
}