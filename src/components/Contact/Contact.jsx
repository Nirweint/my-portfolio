import React from 'react';
import s from './Contact.module.scss';
import styleContainer from '../../common/styles/Container.module.css';
import {Button} from "../UI/Button";
import {Title} from "../../common/components/Title/Title";

export const Contact = () => {
	return (
		<div className={s.contactBlock}>
			<div className={`${styleContainer.container} ${s.contactContainer}`}>
				<Title text={'Contact'}/>
				<form action="" className={s.form}>
					<input className={s.input} placeholder={'Name'}/>
					<input  className={s.input} placeholder={'Email'}/>
					<textarea className={s.textarea} placeholder={'Message'}/>
				</form>
				<Button>Submit</Button>
			</div>
		</div>
	);
}