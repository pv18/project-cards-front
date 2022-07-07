import React from 'react';

import {Button} from '../../components/c5-Button/Button';

import iconImg from '../../assets/img/union.svg';

import s from './Profile.module.scss';

type ProfilePropsType = {
    email: string
    name: string
    onClickEditHandler: () => void
}

// Профиль пользователя
const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.blockProfile}>
            <div className={s.containerProfile}>
                <span className={s.containerProfile__personal}>
                    Personal Information
                </span>
                <div className={s.containerProfile__avatar}>
                    <div className={s.containerProfile__avatar_photo}/>
                    <div className={s.containerProfile__avatar_icon}
                        /*onClick={onClickHandlerAvatar}*/>
                        <img src={iconImg}
                             alt='icon'
                             className={s.containerProfile__avatar_iconImg}/>
                    </div>
                </div>

                <div className={s.containerProfile__description}>
                    <span className={s._name}>{props.name}</span>
                    <span className={s._email}>{props.email}</span>
                </div>

                <div className={s._button}>
                    <Button variant={'primary'}
                            onClick={props.onClickEditHandler}
                        /*disabled={props.isLoading}*/>
                        Edit Profile
                    </Button>
                </div>
                {/*                </div>*/}
            </div>
        </div>
    );
};

export default Profile;