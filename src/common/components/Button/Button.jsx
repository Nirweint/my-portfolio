import React from 'react';
import s from './Button.module.scss';

export const Button = ({className, ...restProps}) => {

	const finalClassName = `${className} ${s.btn}`

	return (
		<button className={finalClassName} {...restProps}/>
	);
}