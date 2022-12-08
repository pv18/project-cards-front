import React from 'react';

import {useNavigate} from 'react-router-dom';

import {PATH} from '../../../app/Routing/Routing';

import {CheckEmail} from './CheckEmail';
import s from './CheckEmail.module.scss';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";

export const CheckEmailContainer = () => {
    const email = useSelector<AppRootStateType, string>(state => state.auth.recoveryEmail);
    const navigate = useNavigate();
    const navigateLogInHandler = () => {
        navigate(PATH.LOGIN);
    };
    return (
        <div className={s.wrapper}>
            <CheckEmail navigateLogInHandler={navigateLogInHandler} email={email}/>
        </div>
    );
};

