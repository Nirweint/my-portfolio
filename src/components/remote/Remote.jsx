import React from 'react';
import {Title} from "../../common/components/title/Title";
import Slide from 'react-reveal/Slide';
import s from './Remote.module.scss'
import {Link} from "react-scroll";
import {Link as LinkButton} from '../../common/components/link/Link'

export const Remote = () => {
	return (
		<div className={s.remoteBlock}>
			<Slide left>
				<div className={s.remoteContainer}>
					<Title text={'Considering options for remote work'}/>
					<Link to={'contact'} spy smooth offset={-70} duration={500}>
						<LinkButton name={'Contact me'}/>
					</Link>
				</div>
			</Slide>
		</div>
	);
}