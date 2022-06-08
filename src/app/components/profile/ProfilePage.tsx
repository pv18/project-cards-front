import React from 'react';

import s from './ProfilePage.module.scss';
import ProfileContainer from './ProfileContainer';
import DoubleSlider from "../DoubleSlider/DoubleSlider";

export const ProfilePage = () => {
    return (
        <div className={s.block}>
            <div className={s.container}>
                <div><ProfileContainer/></div>
                <div className={s.sidebar__numberOfCards}>{<DoubleSlider/>/*<NumberOfCards/>*/}</div>
                <div className={s.myPacksList}>{/*<MyPacksList/>*/}</div>
            </div>
        </div>
    );
};

