import React from 'react';
import {Button} from "../../common/components/Button/Button";
import {Title} from "../../common/components/Title/Title";
import Slide from 'react-reveal/Slide';
import s from './Remote.module.scss'

export const Remote = () => {
	return (
		<div className={s.remoteBlock}>
			<Slide left>
				<div className={s.remoteContainer}>
					<Title text={'Considering options for remote work'}/>
					<Button>Contact me</Button>
				</div>
			</Slide>
		</div>
	);
}