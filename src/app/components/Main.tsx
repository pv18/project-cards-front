import React, {useEffect} from 'react';

import {useSelector} from 'react-redux';

import {AppDispatch, AppRootStateType} from '../store/store';

import {getUserProfile} from '../store/reducers/profileReducer';

import {Routing} from './Routing/Routing';
import {HeaderContainer} from './header/HeaderContainer';
import s from './Main.module.scss';
import {Preloader} from './Preloader/Preloader';

export const Main = () => {

    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);

    const dispatch = AppDispatch();

    useEffect(() => {
        if (!isAuth) {
            dispatch(getUserProfile());
        }
    },[isAuth]);

    return (
        <div className={s.wrapper}>
            <div>
                <HeaderContainer/>
            </div>
            <div>
                {isLoading && <Preloader/>}
            </div>
            <div>
                <Routing/>
            </div>
        </div>
    );
};

