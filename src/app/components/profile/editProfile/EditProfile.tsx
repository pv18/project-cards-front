import React, {ChangeEvent} from 'react';

import {useNavigate} from 'react-router-dom';

import {TextField} from '../../Textfield/TextField';

import {Button} from '../../Button/Button';

import {Preloader} from '../../Preloader/Preloader';

import s from './EditProfile.module.scss';
import iconImg from './../../../assets/img/union.svg'

type EditProfilePropsType = {
    email: string
    name: string
    isLoading: boolean
    setNewName: (name: string) => void
    onClickHandlerSave: () => void
}

// Редактирование профиля пользователя
const EditProfile = (props: EditProfilePropsType) => {

    const navigate = useNavigate();

    // обработчик для изменения имени профиля
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNewName(e.currentTarget.value);
    };
    // обработчик для изменения аватарки
    const onClickHandlerAvatar = () => {
        alert('Аватар будет изменен');
    };
    // обработчик для кнопки Cancel (возврат на предыдущую страницу без сохранения)
    const onClickHandlerCancel = () => {
        navigate(-1);
    };

    return (
        <div className={s.blockEditProfile}>
            {props.isLoading && <Preloader/>}
            <div className={s.containerEditProfile}>
                <span className={s.containerEditProfile__personal}>
                    Personal Information
                </span>
                <div className={s.containerEditProfile__avatar}>
                    <div className={s.containerEditProfile__avatar_photo}/>
                    <div className={s.containerEditProfile__avatar_icon}
                         onClick={onClickHandlerAvatar}>
                        <img src={iconImg}
                             alt="icon"
                             className={s.containerEditProfile__avatar_iconImg}/>
                    </div>
                </div>
                <form className={s.containerEditProfile__form}>
                    <TextField type={'text'}
                               label={'Nickname'}
                               value={props.name}
                               onChange={onChangeHandler}/>
                    <TextField type={'text'}
                               label={'Email'}
                               onChange={()=>{}}
                               value={props.email}/>
                </form>
                <div className={s.containerEditProfile__buttons}>
                    <div className={s._button}>
                        <Button variant={'secondary'}
                                onClick={onClickHandlerCancel}
                                disabled={props.isLoading}>
                            Cancel
                        </Button></div>
                    <div className={s._button}>
                        <Button variant={'primary'}
                                onClick={props.onClickHandlerSave}
                                disabled={props.isLoading}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;