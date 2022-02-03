import React from 'react';
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/components/Title/Title";
import {faJs} from '@fortawesome/free-brands-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faUikit} from '@fortawesome/free-brands-svg-icons';
import s from './Skills.module.scss'


export const Skills = () => {


	return (
		<div className={s.skillsBlock}>
			<div className={s.skillsContainer}>
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