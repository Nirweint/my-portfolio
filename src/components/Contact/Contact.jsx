import React from 'react';
import s from './Contact.module.css';
import styleContainer from '../../common/styles/Container.module.css';
import {Button} from "../UI/Button";

export const Contact = () => {
	return (
		<div className={s.contactBlock}>
			<div className={`${styleContainer.container} ${s.contactContainer}`}>
				<h2 className={s.title}>Contact</h2>
				<form action="" className={s.form}>
					<input className={s.input}/>
					<input  className={s.input}/>
					<textarea className={s.textarea}/>
				</form>
				<Button>Submit</Button>
			</div>
		</div>
	);
}