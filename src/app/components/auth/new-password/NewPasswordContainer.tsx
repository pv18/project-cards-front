import React from 'react';
import {NewPassword} from './NewPassword';
import s from './NewPassword.module.scss';

export const NewPasswordContainer = () => {
    return (
        <div className={s.wrapper}>
            <NewPassword/>
        </div>
    );
};

