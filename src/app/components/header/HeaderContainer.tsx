import React from 'react';
import {NavBar} from './NavBar/NavBar';
import {AppDispatch} from "../../store/store";
import {setLogOut} from "../../store/reducers/loginReducer";
import s from './HeaderContainer.module.scss'
import {Button} from "../Button/Button";

export const HeaderContainer = () => {
    const dispatch = AppDispatch()

    const onclickHandler = () => {
        dispatch(setLogOut())
    }

    return (
        <div className={s.block}>
            <NavBar/>
            <Button variant={"secondary"} onClick={onclickHandler}>LogOut</Button>
        </div>
    );
};

