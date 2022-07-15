import React from 'react';

import {Button} from '../../components/c5-Button/Button';

import s from './Profile.module.scss';

type ProfilePropsType = {
    email: string
    name: string
    isLoading: boolean
    onClickEditHandler: () => void
    avatar: string | undefined
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
                    <div>
                        <img src={props.avatar} className={s.containerProfile__avatar_photo}/>
                    </div>
                </div>

                <div className={s.containerProfile__description}>
                    <span className={s._name}>{props.name}</span>
                    <span className={s._email}>{props.email}</span>
                </div>

                <div className={s._button}>
                    <Button variant={'primary'}
                            onClick={props.onClickEditHandler}
                            disabled={props.isLoading}>
                        Edit Profile
                    </Button>
                </div>
                {/*                </div>*/}
            </div>
        </div>
    );
};

export default Profile;