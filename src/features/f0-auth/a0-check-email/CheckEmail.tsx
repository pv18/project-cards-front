import React from 'react';

import Email from '../../../assets/img/email.svg';

import s from './CheckEmail.module.scss';

type checkEmailPropsType = {
    navigateLogInHandler: () => void
    email: string
}
export const CheckEmail = (props: checkEmailPropsType) => {
    return (
        <div className={s.card}>
            <h2 className={s.title}>It-incubator</h2>
            <img src={Email} alt='Email'/>
            <h3 className={s.title}>Check Email</h3>
            <p className={s.instructions}>We’ve sent an Email with instructions to {props.email}</p>
            <span className={s.checkEmail__logIn}
                  onClick={props.navigateLogInHandler}>
                        Try logging in
            </span>
        </div>
    );
};

