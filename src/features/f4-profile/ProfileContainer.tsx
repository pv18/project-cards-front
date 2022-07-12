import React from 'react';

import {useNavigate} from 'react-router-dom';

import {useSelector} from 'react-redux';

import {PATH} from '../../app/Routing/Routing';
import {AppRootStateType} from '../../store/store';

import {NavBarContainer} from '../f6-navbar/NavBarContainer';

import Profile from './Profile';
import s from './ProfileContainer.module.scss'

const ProfileContainer = () => {

    const navigate = useNavigate();
    const email = useSelector<AppRootStateType, string>(state => state.profile.userData.email);
    const name = useSelector<AppRootStateType, string>(state => state.profile.userData.name);

    // обработчик для кнопки редактирования профиля
    const onClickHandler = () => {
        navigate(PATH.EDIT_PROFILE);
    };

    return (
        <>
            <NavBarContainer/>
            <div className={s.blockProfile}>
                <Profile onClickEditHandler={onClickHandler}
                         email={email}
                         name={name}
                />
            </div>
        </>
    );
};

export default ProfileContainer;