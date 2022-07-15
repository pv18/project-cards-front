import React, {ChangeEvent} from 'react';
import {TextField} from '../../../components/c1-Textfield/TextField';
import {Button} from '../../../components/c5-Button/Button';
import s from './NewPassword.module.scss';

type NewPasswordPropsType = {
    newPassword: string,
    onClickHandlerCreateNewPassword: () => void,
    setNewPassword: (newPassword:string) => void,
}

export const NewPassword = (props: NewPasswordPropsType) => {
    const onChangeHandlerPassword = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNewPassword(e.currentTarget.value)
    }
    return (
        <div className={s.card}>
            <h2 className={s.title}>It-incubator</h2>
            <h3 className={s.title}>Create new password</h3>
            <TextField type={'password'} placeholder={'Password'} value={props.newPassword} onChange={onChangeHandlerPassword}/>
            <p className={s.instructions}>Create new password and we will send you further instructions to email</p>
            <Button width={'266px'} onClick={props.onClickHandlerCreateNewPassword}>Create new password</Button>
        </div>
    );
};

