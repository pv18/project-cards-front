import React from 'react';
import {TextField} from '../../Textfield/TextField';
import {Button} from '../../Button/Button';
import s from './NewPassword.module.scss';


export const NewPassword = () => {
    return (
        <div className={s.card}>
            <h2 className={s.title}>It-incubator</h2>
            <h3 className={s.title}>Create new password</h3>
            <TextField type={'password'} placeholder={'Password'} />
            <p className={s.instructions}>Create new password and we will send you further instructions to email</p>
            <Button width={'266px'}>Create new password</Button>
        </div>
    );
};

