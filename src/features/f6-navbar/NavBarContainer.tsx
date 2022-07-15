import React from 'react';

import {useSelector} from 'react-redux';

import {AppDispatch, AppRootStateType} from '../../store/store';

import {setActiveMenuItem} from '../../store/reducers/appReducer';

import {setLogOut} from '../../store/reducers/authReducer';

import {NavBar} from './NavBar';


export const NavBarContainer = () => {

    const dispatch = AppDispatch();
    const profileIcon = useSelector<AppRootStateType, string | undefined>(state => state.profile.userData.avatar);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);
    const avatar = useSelector<AppRootStateType, string|undefined>(state => state.profile.userData.avatar);

    const onClickHandlerLogOut = () => {
        (!isLoading)
        && (dispatch(setActiveMenuItem('')))
        && (dispatch(setLogOut()));
    };
    return (
        <>
            <NavBar onClickHandlerLogOut={onClickHandlerLogOut}
                    profileIcon={profileIcon}
                    avatar={avatar}
            />
        </>
    );
};

