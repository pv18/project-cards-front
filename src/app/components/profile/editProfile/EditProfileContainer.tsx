import React, {useEffect, useState} from 'react';

import {useSelector} from 'react-redux';

import {AppDispatch, AppRootStateType} from '../../../store/store';
import {putUserProfile} from '../../../store/reducers/profileReducer';

import EditProfile from './EditProfile';
import {PATH} from "../../Routing/Routing";
import {useNavigate} from "react-router-dom";
import {setIsAuth} from "../../../store/reducers/appReducer";
import { setIsLogin } from '../../../store/reducers/loginReducer';

const EditProfileContainer = () => {
    const navigate = useNavigate()
    const dispatch = AppDispatch();
    const email = useSelector<AppRootStateType, string>(state => state.profile.userData.email);
    const name = useSelector<AppRootStateType, string>(state => state.profile.userData.name);
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.profile.isFetching);
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);

    const [newName, setNewName] = useState<string>(name);

    let avatar = '';

    useEffect(()=>{
        if (!isAuth) navigate(PATH.LOGIN);
    },[isAuth, dispatch]);

    //обработчик на нажатие Save в редактировании профиля
    const onClickHandlerSave = () => {
        dispatch(putUserProfile(newName, avatar));
        dispatch(setIsAuth(false))
        dispatch(setIsLogin(false))
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
