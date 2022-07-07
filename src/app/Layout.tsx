import React, {useEffect} from 'react';

import {useSelector} from 'react-redux';

import {Outlet} from 'react-router-dom';

import {Preloader} from '../components/с2-Preloader/Preloader';

import {AppDispatch, AppRootStateType} from '../store/store';

import {getUserProfile} from '../store/reducers/profileReducer';

import s from './Layout.module.scss';


export const Layout = () => {

	const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);
	const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);

	const dispatch = AppDispatch();

	useEffect(() => {
		if (!isAuth) {
			dispatch(getUserProfile());
			console.log ('You are not logged in!');
		}
	},[isAuth, dispatch]);
	
	return (
		<div className={s.wrapper}>
{/*			<div>
				<HeaderContainer/>
			</div>*/}
			<div>
				{isLoading && <Preloader/>}
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
};