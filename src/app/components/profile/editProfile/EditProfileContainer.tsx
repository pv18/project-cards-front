import React, {useEffect, useState} from 'react';

import {useSelector} from 'react-redux';

import {AppDispatch, AppRootStateType} from '../../../store/store';
import {getUserProfile, putUserProfile} from '../../../store/reducers/profileReducer';

import EditProfile from './EditProfile';

const EditProfileContainer = () => {
    const dispatch = AppDispatch();
    const email = useSelector<AppRootStateType, string>(state => state.profile.userData.email);
    const name = useSelector<AppRootStateType, string>(state => state.profile.userData.name);
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.profile.isFetching);
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);

    const [newName, setNewName] = useState<string>(name);

    let avatar = '';

    useEffect(()=>{

        // !isFetching && dispatch(putUserProfile(newName,newAvatar));
        if (!isAuth) dispatch(getUserProfile());
    },[isAuth, dispatch]);

    //обработчик на нажатие Save в редактировании профиля
    const onClickHandlerSave = () => {
        dispatch(putUserProfile(newName, avatar));
    };
    return (
        <div>
            <EditProfile email={email}
                         name={newName}
                         setNewName={setNewName}
                         onClickHandlerSave={onClickHandlerSave}
                         isFetching={isFetching}
            />
        </div>
    );
};

export default EditProfileContainer;
