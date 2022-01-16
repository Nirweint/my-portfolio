import React from 'react';
import {Button} from "../UI/Button";
import s from './Remote.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/Title/Title";

export const Remote = () => {
	return (
		<div className={s.remoteBlock}>
			<div className={`${styleContainer.container} ${s.remoteContainer}`}>
				<Title text={'Considering options for remote work'}/>
				<Button>Contact me</Button>
			</div>
		</div>
	);
}