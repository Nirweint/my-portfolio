import React from 'react';
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/title/Title";
import {faJs} from '@fortawesome/free-brands-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faUikit} from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import s from './Skills.module.scss';


export const Skills = () => {

	return (
		<div className={s.skillsBlock} id='skills'>
			<div className={s.skillsContainer}>
				<Fade top>
					<Title text={'My skills'}/>
				</Fade>
				<div className={s.skills}>
					<Flip left>
						<Skill
							title={'Development'}
							description={"React, Redux, Axios etc"}
							icon={faReact}
						/>
					</Flip>
					<Flip left>
						<Skill
							title={'Foundation'}
							description={"JavaScript, TypeScript, HTML, CSS"}
							icon={faJs}
						/>
					</Flip>
					<Flip left>
						<Skill
							title={'Testing'}
							description={"Unit Tests, Jest, Storybook"}
							icon={faUikit}
						/>
					</Flip>
				</div>
			</div>
		</div>
	);
}