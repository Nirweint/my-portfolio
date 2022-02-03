import React from 'react';
import {Project} from "./Project/Project";
import {Title} from "../../common/components/Title/Title";
import socialNetworkImage from '../../assets/images/social-network-app.png'
import todolistImage from '../../assets/images/todolist.png'
import muiResponsiveImage from '../../assets/images/mui-responsive.png'
import s from './Projects.module.scss';

export const Projects = () => {
	const social = {
		backgroundImage: `url(${socialNetworkImage})`
	}
	const todolist = {
		backgroundImage: `url(${todolistImage})`
	}
	const muiPage = {
		backgroundImage: `url(${muiResponsiveImage})`
	}


	return (
		<div className={s.projectsBlock}>
			<div className={s.projectsContainer}>
				<Title text={'My Projects'}/>
				<div className={s.projects}>
					<Project
						style={todolist}
						title={"Todo App"}
						description={"React, Redux, TypeScript, Thunk, Material UI, Storybook, Formik, Rest API"}
					/>
					<Project
						style={social}
						title={"Social Network App"}
						description={"React, Redux, TypeScript, Thunk, Module CSS, Formik, React-router-dom, Rest API"}
					/>
					<Project
						style={muiPage}
						title={"Responsive MUI App"}
						description={"React, TypeScript, Material UI"}
					/>
				</div>
			</div>
		</div>
	);
}