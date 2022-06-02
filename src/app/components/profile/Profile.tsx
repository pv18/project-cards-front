import React, {useEffect} from 'react';
import s from './Profile.module.scss'
import {Button} from "../Button/Button";
type ProfilePropsType = {
    email: string,
    name: string,
    onClickHandler: ()=>void,
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.photo}></div>
                <span className={s.name}>{props.name}</span>
                <span className={s.profession}>Front-end developer</span>
                <div className={s.edit}><Button variant={"secondary"} onClick={props.onClickHandler}>Edit profile</Button></div>
            </div>
        </div>
    );
};

export default Profile;