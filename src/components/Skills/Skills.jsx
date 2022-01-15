import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/components/Title/Title";

export const Skills = () => {



	return (
		<div className={s.skillsBlock}>
			<div className={`${styleContainer.container} ${s.skillsContainer}`}>
				<Title text={'My skills'}/>
				<div className={s.skills}>
					<Skill title={'JS'} description={"jsdfghalks fhgkjlas dglkasd"}/>
					<Skill  title={'CSS'} description={"jsdfghalks fhgkjlad sfgdsfgdfs dfsdglkasd"}/>
					<Skill  title={'React'} description={"jsdfghalks fhgkjlasdgldfgdsds fgdsfgdffgdsfgkasd"}/>
				</div>
			</div>
		</div>
	);
}