import React from 'react';
import {Button} from "../../common/components/Button/Button";
import {Title} from "../../common/components/Title/Title";
import s from './Contact.module.scss';

export const Contact = () => {
	return (
		<div className={s.contactBlock}>
			<div className={s.contactContainer}>
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