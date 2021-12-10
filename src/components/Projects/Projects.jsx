import React from 'react';
import s from './Projects.module.css';
import styleContainer from '../../common/styles/Container.module.css';
import {Project} from "./Project/Project";

export const Projects = () => {
	return (
		<div className={s.projectsBlock}>
			<div className={`${styleContainer.container} ${s.projectsContainer}`}>
				<h2 className={s.title}>My Projects</h2>
				<div className={s.projects}>
					<Project title={"Todo App"} description={"Amazing app to see in real life"}/>
					<Project title={"Social Network App"} description={"Amazing app to see in real life. But not so good to see."}/>
				</div>
			</div>
		</div>
	);
}