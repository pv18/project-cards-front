import React from 'react';

import {useSelector} from 'react-redux';

import {Button} from '../Button/Button';

import {AppDispatch, AppRootStateType} from '../../store/store';
import {setId} from '../../store/reducers/appReducer';

import s from './MyAll.module.scss';


const MyAll = () => {
    const dispatch = AppDispatch();
   // const myId = useSelector<AppRootStateType, string>(state => state.profile.userData._id);
    const isId = useSelector<AppRootStateType, boolean>(state => state.app.isId);
    
    const onclickHandlerMy = () => {
        dispatch(setId(true));
    };
    const onclickHandlerAll = () => {
        dispatch(setId(false));
    };
    return (
        <div className={s.block}>
            <Button variant={isId ? 'primary' : 'secondary'} onClick={onclickHandlerMy}>My</Button>
            <Button variant={!isId ? 'primary' : 'secondary'} onClick={onclickHandlerAll}>All</Button>
        </div>
    );
};

export default MyAll;