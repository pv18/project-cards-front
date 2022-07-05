import React, {ChangeEvent} from 'react';

import {Button} from '../../../components/c5-Button/Button';
import {TextField} from '../../../components/с1-Textfield/TextField';

import s from './RecoveryPassword.module.scss';

type RecoveryPasswordPropsType = {
    setEmail: (email:string) => void
    onClickHandlerRecoverySend: () => void
    email: string
}

const RecoveryPassword = (props: RecoveryPasswordPropsType) => {
    // обработчик для ввода
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEmail(e.currentTarget.value);
    };

    return (
        <div className={s.block}>
            <div className={s.container}>
                <span className={s.incubator}>
                    It-incubator
                </span>
                <span className={s.forgot}>
                    Forgot your password?
                </span>
                <form className={s.inputContainer}>
                    <TextField className={s.inputEmail} label={'Email'} onChange={onChangeHandler} value={props.email}/>
                </form>
                <span className={s.email}>
                    Enter your email address and we will send you further instructions
                </span>
                <div className={s.buttonContainer}>
                    <Button variant={'primary'} onClick={props.onClickHandlerRecoverySend}>Send Instructions</Button>
                </div>
                <span className={s.remember}>
                        'Did you remember your password?'
                    </span>
                <span className={s.tryLogIn}>
                        Try logging in
                    </span>
            </div>
        </div>
    );
};

export default RecoveryPassword;