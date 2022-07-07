import React from 'react';

import {useNavigate} from 'react-router-dom';

import {PATH} from '../../../app/Routing/Routing';

import {CheckEmail} from './CheckEmail';
import s from './CheckEmail.module.scss';

export const CheckEmailContainer = () => {
    const navigate = useNavigate();
    const navigateLogInHandler = () => {
        navigate(PATH.LOGIN);
    };
    return (
        <div className={s.wrapper}>
            <CheckEmail navigateLogInHandler={navigateLogInHandler}/>
        </div>
    );
};

