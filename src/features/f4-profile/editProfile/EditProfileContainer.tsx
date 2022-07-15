import React, {useEffect, useState} from 'react';

import {useSelector} from 'react-redux';

import {useNavigate} from 'react-router-dom';

import {AppDispatch, AppRootStateType} from '../../../store/store';
import {putUserProfile} from '../../../store/reducers/profileReducer';

import {PATH} from '../../../app/Routing/Routing';

import {NavBarContainer} from '../../f6-navbar/NavBarContainer';

import EditProfile from './EditProfile';
import s from './EditProfileContainer.module.scss';

const EditProfileContainer = () => {
    const navigate = useNavigate();
    const dispatch = AppDispatch();
    const email = useSelector<AppRootStateType, string>(state => state.profile.userData.email);
    const name = useSelector<AppRootStateType, string>(state => state.profile.userData.name);
    const avatar = useSelector<AppRootStateType, string | undefined>(state => state.profile.userData.avatar);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);

    const [newName, setNewName] = useState<string>(name);
    const [newPathFile, setNewPathFile] = useState<string | undefined>(avatar);

    /*let avatar = '';*/

    useEffect(()=>{
        if (!isAuth) navigate(PATH.LOGIN);
    },[isAuth, navigate]);

    //обработчик на нажатие Save в редактировании профиля
    const onClickHandlerSave = () => {
        dispatch(putUserProfile(newName, newPathFile));
    };
    return (
        <>
            <NavBarContainer/>
            <div className={s.blockEditProfile}>
                <EditProfile
                    email={email}
                    name={newName}
                    setNewName={setNewName}
                    onClickHandlerSave={onClickHandlerSave}
                    isLoading={isLoading}
                    setNewPathFile={setNewPathFile}
                    newPathFile={newPathFile}
                />
            </div>
        </>
    );
};

export default EditProfileContainer;
