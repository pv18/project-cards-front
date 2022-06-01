import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ProfileContainer} from '../profile/ProfileContainer';
import {ErrorPage} from '../404/ErrorPage';
import {LoginContainer} from '../auth/login/LoginContainer';
import {PasswordContainer} from '../auth/password/PasswordContainer';
import {RecoveryContainer} from '../auth/recovery/RecoveryContainer';
import {TestPage} from '../TestPage/TestPage';
import {RegistrationContainer} from '../auth/registration/RegistrationContainer';

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PASSWORD: '/password',
    PROFILE: '/profile',
    RECOVERY: '/recovery',
    TEST_PAGE: '/test_page',
}

export const Routing = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<ProfileContainer/>}/>
                <Route path={PATH.LOGIN} element={<LoginContainer/>}/>
                <Route path={PATH.REGISTRATION} element={<RegistrationContainer/>}/>
                <Route path={PATH.PASSWORD} element={<PasswordContainer/>}/>
                <Route path={PATH.RECOVERY} element={<RecoveryContainer/>}/>
                <Route path={PATH.TEST_PAGE} element={<TestPage/>}/>
                <Route path={'/*'} element={<ErrorPage/>}/>
            </Routes>
        </>
    );
};

