import React from 'react';

import s from './NavBar.module.scss';
import {Switch} from './switch/Switch';
import logOutIcon from './../../assets/img/log-out.svg'

type navPropsType = {
    onClickHandlerLogOut: () => void
    profileIcon: string | undefined
    avatar: string|undefined
    profileName: string
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
                <div>
                    <img src={props.avatar} className={s.profileIcon}/>
                </div>
                <span>{props.profileName}</span>
                <img src={logOutIcon} className={s.logOutIcon}/>
            </div>
        </div>
    );
};

