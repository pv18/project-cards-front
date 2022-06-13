import React from 'react';

import {Button} from '../Button/Button';

import s from './Profile.module.scss';
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
                <div className={s.edit}>
                    <Button variant={'secondary'} onClick={props.onClickHandler}>Edit profile</Button>
                </div>
            </div>
        </div>
    );
};

export default Profile;