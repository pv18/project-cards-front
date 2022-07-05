import React, {useEffect} from 'react';

import {useNavigate} from 'react-router-dom';

import {useSelector} from 'react-redux';

import {PATH} from '../../app/Routing/Routing';
import {AppRootStateType} from '../../store/store';

import Profile from './Profile';
import {NavBar} from '../f6-navbar/NavBar';


const ProfileContainer = () => {

    const navigate = useNavigate();
    const email = useSelector<AppRootStateType, string>(state => state.profile.userData.email);
    const name = useSelector<AppRootStateType, string>(state => state.profile.userData.name);

    const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);

    //если не залогинены, от редирект на страницу логинизации
    // useEffect(()=> {
    //     if (!isAuth) navigate(PATH.LOGIN);
    // },[isAuth, navigate]);

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