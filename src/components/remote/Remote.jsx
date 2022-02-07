import React from 'react';
import {Button} from "../../common/components/Button/Button";
import {Title} from "../../common/components/Title/Title";
import Slide from 'react-reveal/Slide';
import s from './Remote.module.scss'
import {Link} from "react-scroll";

export const Remote = () => {
	return (
		<div className={s.remoteBlock}>
			<Slide left>
				<div className={s.remoteContainer}>
					<Title text={'Considering options for remote work'}/>
					<Button>
						<Link to={'contact'} spy smooth offset={-70} duration={500}>Contact me</Link>
					</Button>
				</div>
			</Slide>
		</div>
	);
}