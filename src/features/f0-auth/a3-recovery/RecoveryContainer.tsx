import React, {useState} from 'react';

import {AppDispatch} from '../../../store/store';

import {recoveryPass} from '../../../store/reducers/authReducer';

import RecoveryPassword from './RecoveryPassword';

export const RecoveryContainer = () => {
    const dispatch = AppDispatch();
    const [email, setEmail] = useState<string>('');
    const onClickHandlerRecoverySend = () => {
        dispatch(recoveryPass(email));
    };
    return (
        <div>
            <RecoveryPassword setEmail={setEmail} onClickHandlerRecoverySend={onClickHandlerRecoverySend}
                              email={email}/>
        </div>
    );
};

