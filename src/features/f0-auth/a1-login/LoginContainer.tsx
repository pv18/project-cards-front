import React, {ChangeEvent, useEffect, useState} from 'react';

import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';


import {PATH} from '../../../app/Routing/Routing';

import {AppDispatch, AppRootStateType} from '../../../store/store';

import {setDataLoginTC} from '../../../store/reducers/authReducer';

import {setActiveMenuItem} from '../../../store/reducers/appReducer';

import {Login} from './login';

import s from './LoginContainer.module.scss';


export const LoginContainer = () => {

	const navigate = useNavigate();

	const dispatch = AppDispatch();

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [rememberMe, setRememberMe] = useState<boolean>(false);
	// const [activeBtn, setActiveBtn] = useState<boolean>(false);

	//const activeLoginBtn = useSelector<AppRootStateType, boolean>(state => state.auth.activeLoginBtn);
	const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);
	const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);

	useEffect(() => {
		if (isAuth) {
			dispatch(setActiveMenuItem('profil'));
			navigate(PATH.PROFILE);
		}
	},[isAuth, navigate]);

	// редирект на если забыли пароль
	const redirectLink = () => {
		navigate(PATH.RECOVERY);
	};

	const navigateRegistration = () => {
		navigate(PATH.REGISTRATION);
	};

	// слушаем импут email и записывает в setState
	const onChangeHandlerEmail = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};

	// слушаем checked input remember Me
	const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
		setRememberMe(e.currentTarget.checked);
	};


	// слушаем импут password и записывает в setState
	const onChangeHandlerPassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};

	// слушаем событие на кнопке onClick и отправляем password and email
	const onSubmitHandler = () => {
		// validate data email password
		if (email.length > 5 && password.length > 6) {

			// упакавали в obj email password rememberMe
			const data = {email, password, rememberMe};

			// после окончания запроса вернёться true
			dispatch(setDataLoginTC(data));
		}
	};

	const useDemoAccountHandler = () => {
		dispatch(setDataLoginTC({email: 'test-account-hr@mail.ru', password: 'test11kiki66', rememberMe: false}));
	}
	return (
		<div className={s.blockLogin}>
			<Login
				email={email}
				password={password}
				//activeLoginBtn={activeLoginBtn}
				isLoading={isLoading}
				rememberMe={rememberMe}
				onChangeChecked={onChangeChecked}
				onChangeHandlerEmail={onChangeHandlerEmail}
				onChangeHandlerPassword={onChangeHandlerPassword}
				onSubmitHandler={onSubmitHandler}
				redirectLink={redirectLink}
				navigateRegistration={navigateRegistration}
				useDemoAccountHandler={useDemoAccountHandler}
			/>
		</div>
	);
};

