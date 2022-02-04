import React from 'react';
import {Button} from "../../common/components/Button/Button";
import {Title} from "../../common/components/Title/Title";
import Fade from 'react-reveal/Fade';
import s from './Contact.module.scss';

export const Contact = () => {
	return (
		<div className={s.contactBlock} id='contact'>
			<div className={s.contactContainer}>
				<Title text={'Contact'}/>
				<Fade left>
					<form action="" className={s.form}>
						<input className={s.input} placeholder={'Name'}/>
						<input className={s.input} placeholder={'Email'}/>
						<textarea className={s.textarea} placeholder={'Message'}/>
						<Button className={s.btn}>Submit</Button>
					</form>
				</Fade>
			</div>
		</div>
	);
}