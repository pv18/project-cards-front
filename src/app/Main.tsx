import React, {useEffect} from 'react';

import {useSelector} from 'react-redux';

import {AppDispatch, AppRootStateType} from '../store/store';

import {getUserProfile} from '../store/reducers/profileReducer';

import {Routing} from './Routing/Routing';
import {HeaderContainer} from '../features/f5-header/HeaderContainer';
import s from './Main.module.scss';
import {Preloader} from '../components/с2-Preloader/Preloader';

export const Main = () => {

    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);

    const dispatch = AppDispatch();

    useEffect(() => {
        if (!isAuth) {
            dispatch(getUserProfile());
            console.log ("You are not logged in!");
        }
    },[isAuth, dispatch]);

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

