import React from 'react';
import Email from '../../../assets/img/email.svg';
import s from './CheckEmail.module.scss';

export const CheckEmail = () => {
    return (
        <div className={s.card}>
            <h2 className={s.title}>It-incubator</h2>
            <img src={Email} alt="Email"/>
            <h3 className={s.title}>Check Email</h3>
            <p className={s.instructions}>We’ve sent an Email with instructions to example@mail.com</p>
        </div>
    );
};

