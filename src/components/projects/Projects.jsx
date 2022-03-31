import React from 'react';
import {Project} from "./project/Project";
import {Title} from "../../common/components/title/Title";
import socialNetworkImage from '../../assets/images/social-network-app.png';
import todolistImage from '../../assets/images/todolist.png';
import githubUsersImage from '../../assets/images/github-users-project-image.png';
import cardsImage from '../../assets/images/cards.png';
import Fade from 'react-reveal/Fade';
import s from './Projects.module.scss';

export const Projects = () => {
	const social = {
		backgroundImage: `url(${socialNetworkImage})`
	}
	const todolist = {
		backgroundImage: `url(${todolistImage})`
	}
	const githubUsersPage = {
		backgroundImage: `url(${githubUsersImage})`
	}
	const cards = {
		backgroundImage: `url(${cardsImage})`
	}


	return (
		<div className={s.projectsBlock} id='projects'>
			<div className={s.projectsContainer}>
				<Fade top>
					<Title text={'My projects'}/>
				</Fade>
				<div className={s.projects}>
						<Project
							style={cards}
							title={"Cards App"}
							description={"React, Redux, TypeScript, Thunk, React-router-dom, Rest API"}
							to={'https://cards-learn-app.herokuapp.com/'}
						/>
						<Project
							style={todolist}
							title={"Todo App"}
							description={"React, Redux, TypeScript, Thunk, Material UI, Storybook, Formik, Rest API"}
							to={'https://nirweint.github.io/todo16v2/'}
						/>
						<Project
							style={social}
							title={"Social Network App"}
							description={"React, Redux, TypeScript, Thunk, Module CSS, Formik, React-router-dom, Rest API"}
							to={'https://nirweint.github.io/social-network-typescript/'}
						/>
						<Project
							style={githubUsersPage}
							title={"GitHub users App"}
							description={"React, Redux, TypeScript, Material UI, Thunk, React-router-dom, Rest API"}
							to={'https://nirweint.github.io/github-users-project/'}
						/>
				</div>
			</div>
		</div>
	);
}