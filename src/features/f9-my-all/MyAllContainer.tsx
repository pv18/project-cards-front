import React from 'react';

import {useSelector} from 'react-redux';

import {AppDispatch, AppRootStateType} from '../../store/store';
import {setId} from '../../store/reducers/appReducer';

import MyAll from './MyAll';

const MyAllContainer = () => {
    const dispatch = AppDispatch();
    const isId = useSelector<AppRootStateType, boolean>(state => state.app.isId);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);

    const onclickHandlerMy = () => {
        dispatch(setId(true));
    };
    const onclickHandlerAll = () => {
        dispatch(setId(false));
    };

    return (
        <div>
            <MyAll onclickHandlerMy={onclickHandlerMy}
                   onclickHandlerAll={onclickHandlerAll}
                   isId={isId}
                   isLoading={isLoading}
            />
        </div>
    );
};

export default MyAllContainer;