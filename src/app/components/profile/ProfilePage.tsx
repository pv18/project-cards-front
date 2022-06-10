import React from 'react';

import s from './ProfilePage.module.scss';
import ProfileContainer from './ProfileContainer';
import MyPacksListContainer from "./myPacksList/MyPacksListContainer";

export const ProfilePage = () => {
    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.sidebar__numberOfCards}>
                    <div><ProfileContainer/></div>
                    <div>{/*<DoubleSlider/>*/}</div>
                </div>
                <div className={s.myPacksList}><MyPacksListContainer/></div>
            </div>
        </div>
    );
};

