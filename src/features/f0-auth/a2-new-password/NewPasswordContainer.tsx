import React, {useState} from 'react';

import {useNavigate, useParams} from 'react-router-dom';

import {AppDispatch} from '../../../store/store';

import {createNewPassword} from '../../../store/reducers/authReducer';

import {NewPassword} from './NewPassword';
import s from './NewPassword.module.scss';
import {PATH} from "../../../app/Routing/Routing";

export const NewPasswordContainer = () => {
    const [newPassword, setNewPassword] = useState<string>('');
    const dispatch = AppDispatch();
    const navigate = useNavigate();
    //Забираю токен, который пришел в письме восстановления пароля
    //let {resetPasswordToken} = useParams<'resetPasswordToken'>();
    let params = useParams();

    console.log(params.resetPasswordToken)

    const onClickHandlerCreateNewPassword = () => {
        if (params.resetPasswordToken) {
            dispatch(createNewPassword(newPassword, params.resetPasswordToken));
            //добавить валидацию, переходить только если пользователь прошел ее
            navigate(PATH.LOGIN);
        }
    };

    return (
        <div className={s.wrapper}>
            <NewPassword onClickHandlerCreateNewPassword={onClickHandlerCreateNewPassword}
                         newPassword={newPassword}
                         setNewPassword={setNewPassword}
            />
        </div>
    );
};

