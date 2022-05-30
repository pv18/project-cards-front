import React, {ChangeEvent, useState} from 'react';

import {useNavigate} from 'react-router-dom';

import {PATH} from '../../Routing/Routing';

import {AppDispatch} from '../../../store/store';

import {setDataLoginTC} from '../../../store/reducers/loginReducer';

import s from './LoginContainer.module.scss';

import {Login} from './login';

export const LoginContainer = () => {
	
	const dispatch = AppDispatch();

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [rememberMe, setRememberMe] = useState<boolean>(false);
	const [activeBtn, setActiveBtn] = useState<boolean>(false);


	const navigate = useNavigate();

	// редирект на если забыли пароль
	const redirectLink = () => {
		navigate(PATH.RECOVERY);
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
			
			setActiveBtn(true);
			
			// упакавали в obj email password rememberMe
			const data = {email, password, rememberMe};

			// после окончания запроса вернёться true
			const result = dispatch(setDataLoginTC(data));
			if (result) setActiveBtn(false);
		}
	};

	return (
		<div className={s.blockLogin}>
			<Login
				email={email}
				password={password}
				activeBtn={activeBtn}
				rememberMe={rememberMe}
				onChangeChecked={onChangeChecked}
				onChangeHandlerEmail={onChangeHandlerEmail}
				onChangeHandlerPassword={onChangeHandlerPassword}
				onSubmitHandler={onSubmitHandler}
				redirectLink={redirectLink}
			/>
		</div>
	);
};

