import React from 'react';
import s from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/components/Title/Title";
import {faJs} from '@fortawesome/free-brands-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faUikit} from '@fortawesome/free-brands-svg-icons';


export const Skills = () => {


	return (
		<div className={s.skillsBlock}>
			<div className={`${styleContainer.container} ${s.skillsContainer}`}>
				<Title text={'My skills'}/>
				<div className={s.skills}>
					<Skill
						title={'Development'}
						description={"React, Redux, Axios etc"}
						icon={faReact}
					/>
					<Skill
						title={'Foundation'}
						description={"JavaScript, TypeScript, HTML, CSS"}
						icon={faJs}
					/>
					<Skill
						title={'Testing'}
						description={"Unit Tests, Jest, Storybook"}
						icon={faUikit}
					/>
				</div>
			</div>
		</div>
	);
}