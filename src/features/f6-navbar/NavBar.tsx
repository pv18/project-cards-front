import React from 'react';

import s from './NavBar.module.scss';
import {Switch} from './switch/Switch';

type navPropsType = {
    onClickHandlerLogOut: () => void
    profileIcon: string | undefined
}

export const NavBar = (props: navPropsType) => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.logo}>It-incubator</h2>
            <div className={s.switch}>
                <Switch/>
            </div>
            <div className = {s.logOut}
                 onClick={() => {
                     props.onClickHandlerLogOut();
                 }}
            >
                <div className={s.profileIcon}>

                </div>
                <span>LogOut</span>
            </div>
        </div>
    );
};

