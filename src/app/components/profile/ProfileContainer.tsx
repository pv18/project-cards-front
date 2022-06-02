import React, {useEffect, useState} from 'react';

import {useNavigate} from 'react-router-dom';

import {useSelector} from 'react-redux';

import {PATH} from '../Routing/Routing';
import {getUserProfile} from '../../store/reducers/profileReducer';
import {AppDispatch, AppRootStateType} from '../../store/store';

import Profile from './Profile';

const ProfileContainer = () => {

    const navigate = useNavigate();
    const dispatch = AppDispatch(); //поменять
    const email = useSelector<AppRootStateType, string>(state => state.profile.email);
    const name = useSelector<AppRootStateType, string>(state => state.profile.name);

    useEffect(()=>{
        dispatch(getUserProfile());
    },[]);

    // обработчик для кнопки редактирования профиля
    const onClickHandler = () => {
        navigate(PATH.EDIT_PROFILE);
    };

    return (
        <div>
            <Profile onClickHandler={onClickHandler}
                     email={email}
                     name={name}
            />
        </div>
    );
};

export default ProfileContainer;