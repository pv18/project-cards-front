import React from 'react';

import {AppDispatch} from '../../store/store';

import {Button} from '../Button/Button';

import {setLogOut} from '../../store/reducers/authReducer';

import s from './HeaderContainer.module.scss';
import {NavBar} from './NavBar/NavBar';

export const HeaderContainer = () => {
    const dispatch = AppDispatch();

    const onclickHandler = () => {
        dispatch(setLogOut());
    };

    return (
        <div className={s.block}>
            <NavBar/>
            <Button variant={'secondary'} onClick={onclickHandler}>LogOut</Button>
        </div>
    );
};

