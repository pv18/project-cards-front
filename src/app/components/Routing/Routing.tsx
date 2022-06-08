import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {ProfilePage} from '../profile/ProfilePage';
import {ErrorPage} from '../404/ErrorPage';
import {LoginContainer} from '../auth/login/LoginContainer';
import {PasswordContainer} from '../auth/password/PasswordContainer';
import {RecoveryContainer} from '../auth/recovery/RecoveryContainer';
import {TestPage} from '../TestPage/TestPage';
import {RegistrationContainer} from '../auth/registration/RegistrationContainer';
import EditProfileContainer from '../profile/editProfile/EditProfileContainer';
import {PacksList} from '../packs-list/PacksList';

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PASSWORD: '/password',
    PROFILE: '/profile',
    RECOVERY: '/recovery',
    TEST_PAGE: '/test_page',
    EDIT_PROFILE: '/edit_profile',
    PACKS_LIST: '/packs_list',
};

export const Routing = () => {
    return (
        <>
            <Routes>
                <Route path={PATH.PROFILE} element={<ProfilePage/>}/>
                <Route path={PATH.EDIT_PROFILE} element={<EditProfileContainer/>}/>
                <Route path={PATH.LOGIN} element={<LoginContainer/>}/>
                <Route path={PATH.REGISTRATION} element={<RegistrationContainer/>}/>
                <Route path={PATH.PASSWORD} element={<PasswordContainer/>}/>
                <Route path={PATH.RECOVERY} element={<RecoveryContainer/>}/>
                <Route path={PATH.TEST_PAGE} element={<TestPage/>}/>
                <Route path={PATH.PACKS_LIST} element={<PacksList/>}>
                    {/*роутинг на таблицу с карточками вместо PacksList доделать*/}
                    <Route path={':packId'} element={<PacksList/>}/>
                </Route>
                <Route path={'/*'} element={<ErrorPage/>}/>
            </Routes>
        </>
    );
};

