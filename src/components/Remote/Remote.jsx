import React from 'react';
import {Button} from "../UI/Button";
import s from './Remote.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const Remote = () => {
	return (
		<div className={s.remoteBlock}>
			<div className={`${styleContainer.container} ${s.remoteContainer}`}>
				<h2 className={s.title}>Considering options for remote work</h2>
				<Button>Contact me</Button>
			</div>
		</div>
	);
}