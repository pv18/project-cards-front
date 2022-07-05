import React from 'react';

import {useSelector} from 'react-redux';

import {Button} from '../../components/c5-Button/Button';

import {AppDispatch, AppRootStateType} from '../../store/store';
import {setId} from '../../store/reducers/appReducer';

import s from './MyAll.module.scss';


const MyAll = () => {
    const dispatch = AppDispatch();
    // const myId = useSelector<AppRootStateType, string>(state => state.f4-profile.userData._id);
    const isId = useSelector<AppRootStateType, boolean>(state => state.app.isId);

    const onclickHandlerMy = () => {
        dispatch(setId(true));
    };
    const onclickHandlerAll = () => {
        dispatch(setId(false));
    };
    return (
        <div className={s.block}>
            {/*<c5-Button variant={isId ? 'primary' : 'secondary'} onClick={onclickHandlerMy}>My</c5-Button>*/}
            {/*<c5-Button variant={!isId ? 'primary' : 'secondary'} onClick={onclickHandlerAll}>All</c5-Button>*/}
            <button className={!isId ? s.primary : s.active} onClick={onclickHandlerMy}>My</button>
            <button className={isId ? s.primary : s.active} onClick={onclickHandlerAll}>All</button>
        </div>
    );
};

export default MyAll;