import React from 'react';
import {Title} from "../../common/components/Title/Title";
import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser';
import s from './Contact.module.scss';

export const Contact = () => {


	const handleSendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_3ainx4a', 'template_r9qonss', e.target, 'user_6cI0mlz5II9vPXIxiqYto')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		e.target.reset();
	}

	return (
		<div className={s.contactBlock} id='contact'>
			<div className={s.contactContainer}>
				<Title text={'Contact'}/>
				<Fade left>
					<form className={s.form} onSubmit={handleSendEmail}>
						<input className={s.input} placeholder={'Name'} type={'text'}
							   name={'name'}/>
						<input className={s.input} placeholder={'Email'} type={'email'}
							   name={'email'}/>
						<textarea className={s.textarea} placeholder={'Message'}
								  name={'message'}/>
						<input className={s.btnInput} type='submit' value="Send"/>
					</form>
				</Fade>
			</div>
		</div>
	);
}