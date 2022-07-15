import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

import {ErrorPage} from '../../features/f14-404/ErrorPage';
import {LoginContainer} from '../../features/f0-auth/a1-login/LoginContainer';
import {RecoveryContainer} from '../../features/f0-auth/a3-recovery/RecoveryContainer';
import {RegistrationContainer} from '../../features/f0-auth/a4-registration/RegistrationContainer';
import EditProfileContainer from '../../features/f4-profile/editProfile/EditProfileContainer';
import {PacksList} from '../../features/f11-packs-list/PacksList';
import {PackName} from '../../features/f10-pack-name/PackName';
import {CheckEmailContainer} from '../../features/f0-auth/a0-check-email/CheckEmailContainer';
import {NewPasswordContainer} from '../../features/f0-auth/a2-new-password/NewPasswordContainer';
import {LearnCardsContainer} from '../../features/f3-learnCards/LearnCardsContainer';
import {Layout} from '../Layout';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import ProfileContainer from "../../features/f4-profile/ProfileContainer";

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
    LEARN_CARDS: '/learn_cards',
};

export const Routing = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={PATH.PROFILE}
                           element={
                               <WithAuthRedirect>
                                   <ProfileContainer/>
                               </WithAuthRedirect>}/>
                    <Route path={PATH.EDIT_PROFILE}
                           element={
                               <WithAuthRedirect>
                                   <EditProfileContainer/>
                               </WithAuthRedirect>}/>
                    <Route path={PATH.LOGIN} element={<LoginContainer/>}/>
                    <Route path={PATH.REGISTRATION} element={<RegistrationContainer/>}/>
                    <Route path={PATH.RECOVERY} element={<RecoveryContainer/>}/>
                    <Route path={PATH.CHECK_EMAIL} element={<CheckEmailContainer/>}/>
                    <Route path={PATH.NEW_PASSWORD} element={<NewPasswordContainer/>}>
                        <Route path={':resetPasswordToken'} element={<NewPasswordContainer/>}/>
                    </Route>
                    <Route path={PATH.PACK_NAME} element={
                        <WithAuthRedirect>
                            <PackName/>
                        </WithAuthRedirect>}>
                        <Route path={':name/:packId/:pageCount'} element={
                            <WithAuthRedirect>
                                <PackName/>
                            </WithAuthRedirect>}/>
                    </Route>
                    <Route path={PATH.PACKS_LIST} element={
                        <WithAuthRedirect>
                        <PacksList/>
                        </WithAuthRedirect>}>
                        {/*роутинг на таблицу с карточками вместо PacksList доделать*/}
                    </Route>
                    <Route path={'*'} element={<ErrorPage/>}/>
                    <Route path={'/'} element={<Navigate to={PATH.LOGIN}/>}/>

                    <Route path={PATH.LEARN_CARDS} element={<LearnCardsContainer/>}/>
                </Route>
            </Routes>
        </>
    );
};

