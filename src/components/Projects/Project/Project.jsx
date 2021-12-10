import React from 'react';
import s from './Project.module.css';
import {Button} from "../../UI/Button";

export const Project = ({title, description}) => {
	return (
		<div className={s.projectBlock}>
			<div className={s.image}>
				<Button>Learn More</Button>
			</div>

			<div className={s.titleContainer}>
				<h3 className={s.title}>{title}</h3>
				<p className={s.description}>{description}</p>
			</div>
		</div>
	);
}