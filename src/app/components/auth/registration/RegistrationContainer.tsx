import React, {useState, ChangeEvent, useEffect} from 'react';

import {useNavigate} from 'react-router-dom';

import {useSelector} from 'react-redux';

import {PATH} from '../../Routing/Routing';
import {AppDispatch, AppRootStateType} from '../../../store/store';
import {postRegisterTC} from '../../../store/reducers/authReducer';

import {Registration} from './Registration';

export const RegistrationContainer = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');
    const registration = useSelector<AppRootStateType, boolean>(state => state.auth.registration);
    const error = useSelector<AppRootStateType, string | undefined>(state => state.auth.error);
    const dispatch = AppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (registration) navigate(PATH.LOGIN);
    }, [registration]);

    // слушаем импут email и записывает в setState
    const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    };

    // слушаем импут поле password и записывает в setState
    const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };

    // слушаем импут поле confirm password и записывает в setState
    const password2ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword2(e.currentTarget.value);
    };

    // слушаем событие на кнопке onClick и отправляем password and email
    const submitHandler = () => {
        // валидация email и password
        if (email.trim().length && password.trim().length && password === password2) {

            // упакавали в obj email password rememberMe
            const data = {email, password};
            dispatch(postRegisterTC(data));
        }
    };

    return (
        <>
            <Registration email={email}
                          error={error}
                          password={password}
                          password2={password2}
                          changeEmail={emailChangeHandler}
                          changePassword={passwordChangeHandler}
                          changePassword2={password2ChangeHandler}
                          submitForm={submitHandler}
            />
        </>
    );
};

