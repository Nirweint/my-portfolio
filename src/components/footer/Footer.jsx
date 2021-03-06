import React from 'react';
import {Title} from "../../common/components/title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faConnectdevelop} from '@fortawesome/free-brands-svg-icons';
import s from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer className={s.footerBlock}>
			<div className={s.footerContainer}>
				<Title text={'Alexander Vakulich'}/>
				<div className={s.icons}>
					<a className={s.icon}
					   href={'https://www.linkedin.com/in/alexander-vakulich-b728a81a8/'}
					   target="_blank"
					   rel={'noreferrer'}>
						<FontAwesomeIcon icon={faLinkedin} color={'#f0f0f0'} size={"3x"}/>
					</a>
					<a className={s.icon}
					   href={'https://t.me/Nirweint'}
					   target="_blank"
					   rel={'noreferrer'}>
						<FontAwesomeIcon icon={faTelegram} color={'#f0f0f0'} size={"3x"}/>
					</a>
					<a className={s.icon}
					   href={'https://github.com/Nirweint'}
					   target="_blank"
					   rel={'noreferrer'}>
						<FontAwesomeIcon icon={faGithubSquare} color={'#f0f0f0'}
										 size={"3x"}/>
					</a>
					<a className={s.icon}
					   href={'https://www.codewars.com/users/nirweint'}
					   target="_blank"
					   rel={'noreferrer'}>
						<FontAwesomeIcon icon={faConnectdevelop} color={'#f0f0f0'}
										 size={"3x"}/>
					</a>
				</div>
				<p className={s.text}>© 2021 All rights reserved</p>
			</div>
		</footer>
	);
}