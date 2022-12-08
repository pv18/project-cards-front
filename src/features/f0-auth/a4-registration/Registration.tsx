import React, {ChangeEvent} from 'react';

import {Button} from '../../../components/c5-Button/Button';
import {TextField} from '../../../components/c1-Textfield/TextField';

import s from './Registration.module.scss';

type RegistrationPropsType = {
    email: string
    error: string | undefined
    password: string
    password2: string
    changeEmail: (e: ChangeEvent<HTMLInputElement>) => void
    changePassword: (e: ChangeEvent<HTMLInputElement>) => void
    changePassword2: (e: ChangeEvent<HTMLInputElement>) => void
    submitForm: () => void
    navigateLogInHandler: ()=>void
}

export const Registration: React.FC<RegistrationPropsType> = (
    {
        email,
        error,
        password,
        password2,
        changeEmail,
        changePassword,
        changePassword2,
        submitForm,
        navigateLogInHandler,
    },
) => {
    return (
        <div className={s.wrapper}>
            <div className={s.card}>
                <h2>It-incubator</h2>
                <h3>Sign Up</h3>
                <div className={s.form}>
                    <TextField label={'Email'}
                               value={email}
                               onChange={changeEmail}
                    />
                    <TextField label={'Password'}
                               type={'password'}
                               value={password}
                               onChange={changePassword}
                    />
                    <TextField label={'Confirm password'}
                               type={'password'}
                               value={password2}
                               onChange={changePassword2}
                    />
                    {error && <div style={{color: 'red'}}>{error}</div>}
                </div>
                <div className={s.buttons}>
                    <Button onClick={submitForm}>Register</Button>
                </div>
                <span className={s.registration__question}>
                        'Did you remember your password?'
                </span>
                <span className={s.registration__logIn}
                      onClick={navigateLogInHandler}>
                        Try logging in
                </span>
            </div>
        </div>
    );
};

