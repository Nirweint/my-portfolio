import React from 'react';
import {Button} from "../../../common/components/Button/Button";
import Fade from 'react-reveal/Fade';
import s from './Project.module.scss';

export const Project = ({title, description, style, to}) => {
	return (
		<div className={s.projectBlock}>
			<Fade bottom>
				<div className={s.image} style={style}>
					<Button className={s.btn}>
						<a href={to} rel={'noreferrer'} target={'_blank'}>More Info</a>
					</Button>
				</div>

				<div className={s.titleContainer}>
					<h3 className={s.title}>{title}</h3>
					<p className={s.description}>{description}</p>
				</div>
			</Fade>
		</div>
	);
}