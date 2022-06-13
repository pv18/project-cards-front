import React from 'react';
import {CheckEmail} from './CheckEmail';
import s from './CheckEmail.module.scss';

export const CheckEmailContainer = () => {
    return (
        <div className={s.wrapper}>
            <CheckEmail/>
        </div>
    );
};

