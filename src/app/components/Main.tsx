import React from 'react';

import {useSelector} from 'react-redux';

import {AppRootStateType} from '../store/store';

import {Routing} from './Routing/Routing';
import {HeaderContainer} from './header/HeaderContainer';
import s from './Main.module.scss';
import {Preloader} from './Preloader/Preloader';

export const Main = () => {

    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);

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

