import React from 'react';
import s from './Skill.module.css';

export const Skill = ({icon, title, description}) => {
	return (
		<div className={s.skill}>
			<div className={s.icon}>
				{icon}
			</div>
			<h3 className={s.title}>
				{title}
			</h3>
			<div className={s.description}>
				{description}
			</div>
		</div>
	);
}