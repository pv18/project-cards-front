import React, {DetailedHTMLProps, HTMLAttributes, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {useNavigate} from 'react-router-dom';

import { Navigate } from 'react-router-dom';

import {AppRootStateType} from '../store/store';
import {PATH} from '../app/Routing/Routing';


type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const WithAuthRedirect = (props: DivPropsType) => {

	const {children} = props;

	const navigate = useNavigate();

	const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);

	const redirect = PATH.LOGIN;
	//
	useEffect(() => {
		if (!isAuth) navigate(redirect);
	}, [isAuth, navigate]);

	if (!isAuth) return <Navigate to={redirect}/>;

	return (
		<>
			{children}
		</>
	);
};