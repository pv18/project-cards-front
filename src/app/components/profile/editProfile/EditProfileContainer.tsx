import React, {useEffect, useState} from 'react';
import EditProfile from "./EditProfile";
import {useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../../../store/store";
import {putUserProfile} from "../../../store/reducers/profileReducer";

const EditProfileContainer = () => {
    const dispatch = AppDispatch();
    const email = useSelector<AppRootStateType, string>(state => state.profile.email)
    const name = useSelector<AppRootStateType, string>(state => state.profile.name)
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.profile.isFetching)
    const [newName, setNewName] = useState<string>(name)
    const [newAvatar, setNewAvatar] = useState<string>('')

    useEffect(()=>{
        !isFetching && dispatch(putUserProfile(newName,newAvatar))

    },[newAvatar,newName])

    //обработчик на нажатие Save в редактировании профиля
    const onClickHandlerSave = (newName:string,avatar:string) => {
        setNewName(newName)
    }
    return (
        <div>
            <EditProfile email={email}
                         name={name}
                         onClickHandlerSave={onClickHandlerSave}
                         isFetching={isFetching}
            />
        </div>
    );
};

export default EditProfileContainer;
