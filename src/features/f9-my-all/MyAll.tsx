import React from 'react';

import {useSelector} from 'react-redux';


import {AppDispatch, AppRootStateType} from '../../store/store';
import {setId} from '../../store/reducers/appReducer';

import s from './MyAll.module.scss';


const MyAll = () => {
    const dispatch = AppDispatch();
    const isId = useSelector<AppRootStateType, boolean>(state => state.app.isId);

    const onclickHandlerMy = () => {
        dispatch(setId(true));
    };
    const onclickHandlerAll = () => {
        dispatch(setId(false));
    };
    return (
        <div className={s.block}>
            <button className={!isId ? s.primary : s.active} onClick={onclickHandlerMy}>My</button>
            <button className={isId ? s.primary : s.active} onClick={onclickHandlerAll}>All</button>
        </div>
    );
};

export default MyAll;