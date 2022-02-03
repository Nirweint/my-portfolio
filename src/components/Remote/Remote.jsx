import React from 'react';
import {Button} from "../../common/components/Button/Button";
import {Title} from "../../common/components/Title/Title";
import s from './Remote.module.scss'

export const Remote = () => {
	return (
		<div className={s.remoteBlock}>
			<div className={s.remoteContainer}>
				<Title text={'Considering options for remote work'}/>
				<Button>Contact me</Button>
			</div>
		</div>
	);
}