import React from 'react';
import Fade from 'react-reveal/Fade';
import s from './Main.module.scss';

export const Main = () => {
	return (
		<div className={s.mainBlock}>
			<div className={s.mainContainer}>
				<div className={s.text}>
					<h2>Hello, I am <span
						className={s.highlight}>Alexander Vakulich</span></h2>
					<p className={s.secondTitle}>I am a Frontend developer.</p>
				</div>
				<Fade right>
					<div className={s.photo}></div>
				</Fade>
			</div>
		</div>
	);
}