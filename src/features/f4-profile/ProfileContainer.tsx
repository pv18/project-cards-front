import React from 'react';

import {useNavigate} from 'react-router-dom';

import {useSelector} from 'react-redux';

import {PATH} from '../../app/Routing/Routing';
import {AppRootStateType} from '../../store/store';

import Profile from './Profile';


const ProfileContainer = () => {

    const navigate = useNavigate();
    const email = useSelector<AppRootStateType, string>(state => state.profile.userData.email);
    const name = useSelector<AppRootStateType, string>(state => state.profile.userData.name);

    const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);

    // обработчик для кнопки редактирования профиля
    const onClickHandler = () => {
        navigate(PATH.EDIT_PROFILE);
    };

    return (
        <div>
            <Profile onClickEditHandler={onClickHandler}
                     email={email}
                     name={name}
            />
        </div>
    );
};

export default ProfileContainer;