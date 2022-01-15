import React from 'react';
import s from './Contact.module.css';
import styleContainer from '../../common/styles/Container.module.css';
import {Button} from "../UI/Button";
import {Title} from "../../common/components/Title/Title";

export const Contact = () => {
	return (
		<div className={s.contactBlock}>
			<div className={`${styleContainer.container} ${s.contactContainer}`}>
				<Title text={'Contact'}/>
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