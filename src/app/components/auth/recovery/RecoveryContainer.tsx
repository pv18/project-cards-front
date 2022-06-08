import React, {useState} from 'react';
import RecoveryPassword from "./RecoveryPassword";
import {recoveryPass} from "../../../store/reducers/loginReducer";
import {AppDispatch} from "../../../store/store";

export const RecoveryContainer = () => {
    const dispatch = AppDispatch()
    const [email, setEmail] = useState<string>('');
    const onClickHandlerRecoverySend = () => {
        dispatch(recoveryPass(email))
    }
    return (
        <div>
            <RecoveryPassword setEmail={setEmail} onClickHandlerRecoverySend={onClickHandlerRecoverySend}
                              email={email}/>
        </div>
    );
};

