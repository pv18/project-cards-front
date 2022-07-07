import React, {useState} from 'react';

import {useNavigate} from 'react-router-dom';

import {AppDispatch} from '../../../store/store';

import {recoveryPass} from '../../../store/reducers/authReducer';

import {PATH} from '../../../app/Routing/Routing';

import RecoveryPassword from './RecoveryPassword';

export const RecoveryContainer = () => {
    const dispatch = AppDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const onClickHandlerRecoverySend = () => {
        dispatch(recoveryPass(email));
        navigate(PATH.CHECK_EMAIL);
    };
    const navigateLogInHandler = () => {
        navigate(PATH.LOGIN);
    };
    return (
        <div>
            <RecoveryPassword setEmail={setEmail} 
                              onClickHandlerRecoverySend={onClickHandlerRecoverySend}
                              email={email}
                              navigateLogInHandler={navigateLogInHandler}
            />
        </div>
    );
};

