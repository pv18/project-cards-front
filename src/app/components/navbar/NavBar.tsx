import React from 'react';
import s from './NavBar.module.scss';
import {Switch} from './switch/Switch';

export const NavBar = () => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.logo}>It-incubator</h2>
            <div className={s.switch}>
                <Switch/>
            </div>
        </div>
    );
};

