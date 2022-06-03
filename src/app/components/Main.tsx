import React from 'react';
import {Routing} from './Routing/Routing';
import {HeaderContainer} from './header/HeaderContainer';
import s from './Main.module.scss';

export const Main = () => {
    return (
        <div className={s.wrapper}>
            <HeaderContainer/>
            <Routing/>
        </div>
    );
};

