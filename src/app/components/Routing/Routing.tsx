import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

import {ProfilePage} from '../profile/ProfilePage';
import {ErrorPage} from '../404/ErrorPage';
import {LoginContainer} from '../auth/login/LoginContainer';
import {RecoveryContainer} from '../auth/recovery/RecoveryContainer';
import {TestPage} from '../TestPage/TestPage';
import {RegistrationContainer} from '../auth/registration/RegistrationContainer';
import EditProfileContainer from '../profile/editProfile/EditProfileContainer';
import {PacksList} from '../packs-list/PacksList';
import {PackName} from '../pack-name/PackName';
import {CheckEmailContainer} from '../auth/check-email/CheckEmailContainer';
import {NewPasswordContainer} from '../auth/new-password/NewPasswordContainer';

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    RECOVERY: '/recovery',
    TEST_PAGE: '/test_page',
    EDIT_PROFILE: '/edit_profile',
    PACKS_LIST: '/packs_list',
    PACK_NAME: '/pack_name',
    CHECK_EMAIL: '/check_email',
    NEW_PASSWORD: '/new_password',
};

export const Routing = () => {
    return (
        <>
            <Routes>
                <Route path={PATH.PROFILE} element={<ProfilePage/>}/>
                <Route path={PATH.EDIT_PROFILE} element={<EditProfileContainer/>}/>
                <Route path={PATH.LOGIN} element={<LoginContainer/>}/>
                <Route path={PATH.REGISTRATION} element={<RegistrationContainer/>}/>
                <Route path={PATH.RECOVERY} element={<RecoveryContainer/>}/>
                <Route path={PATH.CHECK_EMAIL} element={<CheckEmailContainer/>}/>
                <Route path={PATH.TEST_PAGE} element={<TestPage/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPasswordContainer/>}>
                    <Route path={':resetPasswordToken'} element={<NewPasswordContainer/>}/>
                </Route>
                <Route path={PATH.PACK_NAME} element={<PackName/>}>
                    <Route path={':name/:packId/:pageCount'} element={<PackName/>}/>
                </Route>
                <Route path={PATH.PACKS_LIST} element={<PacksList/>}>
                    {/*роутинг на таблицу с карточками вместо PacksList доделать*/}
                </Route>
                <Route path={'/*'} element={<ErrorPage/>}/>
                <Route path={'/'} element={<Navigate to={PATH.LOGIN}/>}/>

            </Routes>
        </>
    );
};

