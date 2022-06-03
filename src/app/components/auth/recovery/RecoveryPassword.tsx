import React, {useState} from 'react';
import s from './RecoveryPassword.module.scss'
import {Button} from "../../Button/Button";
import {TextField} from "../../Textfield/TextField";

const RecoveryPassword = () => {
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
                    <TextField className={s.inputEmail} label={"Email"}/>
                </form>
                <span className={s.email}>
                    Enter your email address and we will send you further instructions
                </span>
                <div className={s.buttonContainer}>
                    <Button variant={"primary"}>Send Instructions</Button>
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