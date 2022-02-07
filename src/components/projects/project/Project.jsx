import React from 'react';
import Fade from 'react-reveal/Fade';
import s from './Project.module.scss';
import {Link} from "../../../common/components/link/Link";

export const Project = ({title, description, style, to}) => {
	return (
		<div className={s.projectBlock}>
			<Fade bottom>
				<div className={s.image} style={style}>
					<Link to={to} name={'More Info'}/>
				</div>

				<div className={s.titleContainer}>
					<h3 className={s.title}>{title}</h3>
					<p className={s.description}>{description}</p>
				</div>
			</Fade>
		</div>
	);
}