import React, {useEffect} from 'react';

import {useSelector} from 'react-redux';

import {AppDispatch, AppRootStateType} from '../../../store/store';

import {setId} from '../../../store/reducers/appReducer';

import MyPacksList from './MyPacksList';


const MyPacksListContainer = () => {
    const dispatch = AppDispatch();
    const isId = useSelector<AppRootStateType, boolean>(state => state.app.isId);

    useEffect(() => {
        dispatch(setId(true));
    }, [isId, dispatch]);

    return (
        <MyPacksList/>
    );
};
export default MyPacksListContainer;