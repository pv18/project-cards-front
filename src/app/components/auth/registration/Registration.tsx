import React, {ChangeEvent} from 'react';
import {Button} from '../../Button/Button';
import {TextField} from '../../Textfield/TextField';
import s from './Registration.module.scss';

type RegistrationPropsType = {
    email: string
    password: string
    password2: string
    changeEmail: (e: ChangeEvent<HTMLInputElement>) => void
    changePassword: (e: ChangeEvent<HTMLInputElement>) => void
    changePassword2: (e: ChangeEvent<HTMLInputElement>) => void
    submitForm: () => void
}

export const Registration: React.FC<RegistrationPropsType> = (
    {
        email,
        password,
        password2,
        changeEmail,
        changePassword,
        changePassword2,
        submitForm,
    }
) => {
    return (
        <div className={s.wrapper}>
            <div className={s.card}>
                <h2>It-incubator</h2>
                <h3>Sign Up</h3>
                <form>
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
                </form>
                <div className={s.buttons}>
                    <Button onClick={submitForm}>Register</Button>
                </div>
            </div>
        </div>
    );
};
