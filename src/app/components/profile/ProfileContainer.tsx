import React, {useEffect} from 'react';

import {useNavigate} from 'react-router-dom';

import {useSelector} from 'react-redux';

import {PATH} from '../Routing/Routing';
import {getUserProfile} from '../../store/reducers/profileReducer';
import {AppDispatch, AppRootStateType} from '../../store/store';

import Profile from './Profile';
import {setLogOut} from "../../store/reducers/loginReducer";


const ProfileContainer = () => {

    const navigate = useNavigate();
    const dispatch = AppDispatch(); //поменять
    const email = useSelector<AppRootStateType, string>(state => state.profile.userData.email);
    const name = useSelector<AppRootStateType, string>(state => state.profile.userData.name);

    const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);

    //если не залогинены, от редирект на страницу логинизации
    useEffect(()=> {
    if (!isAuth) navigate(PATH.LOGIN)
    },[isAuth, dispatch]);

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