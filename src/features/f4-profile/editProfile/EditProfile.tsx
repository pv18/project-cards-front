import React, {ChangeEvent, useState} from 'react';

import {useNavigate} from 'react-router-dom';

import {TextField} from '../../../components/c1-Textfield/TextField';

import {Button} from '../../../components/c5-Button/Button';

import {Preloader} from '../../../components/c2-Preloader/Preloader';

import iconImg from '../../../assets/img/union.svg';

import s from './EditProfile.module.scss';

type EditProfilePropsType = {
    email: string
    name: string
    isLoading: boolean
    setNewName: (name: string) => void
    setNewPathFile: (newPathFile: string) => void
    onClickHandlerSave: () => void
    newPathFile: string | undefined
}

// Редактирование профиля пользователя
const EditProfile = (props: EditProfilePropsType) => {

    const navigate = useNavigate();
    const [showInputFile, setShowInputFile] = useState<boolean>(false);


    // обработчик для изменения имени профиля
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        !props.isLoading && props.setNewName(e.currentTarget.value);
    };

    const formData = new FormData(); // for send to back

    // обработчик для изменения аватарки
    const onClickHandlerAvatar = () => {
        setShowInputFile(true);
        //alert('Аватар будет изменен');
    };
    // обработчик для кнопки Cancel (возврат на предыдущую страницу без сохранения)
    const onClickHandlerCancel = () => {
        !props.isLoading && navigate(-1);
    };
    const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files ? e.target.files[0].name : 'NoFile');
        if (e.target.files) {

        }
    };
    const onChangeNewPathAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNewPathFile(e.currentTarget.value);
    };
    return (
        <div className={s.blockEditProfile}>
            {props.isLoading && <Preloader/>}
            <div className={s.containerEditProfile}>
                <span className={s.containerEditProfile__personal}>
                    Personal Information
                </span>
                <div className={s.containerEditProfile__avatar}>
                    <div>
                        <img src={props.newPathFile} className={s.containerEditProfile__avatar_photo}/>
                    </div>
                    <div className={s.containerEditProfile__avatar_icon}
                         onClick={onClickHandlerAvatar}>
                        <img src={iconImg}
                             alt='icon'
                             className={s.containerEditProfile__avatar_iconImg}/>
                    </div>
                </div>
                {(showInputFile) && <input type='text' onChange={onChangeNewPathAvatar} value={props.newPathFile}/>}
                {(showInputFile) && <input type='file' accept='.jpg, .jpeg, .png' onChange={onChangeAvatar}/>}
                <form className={s.containerEditProfile__form}>
                    <TextField type={'text'}
                               label={'Nickname'}
                               value={props.name}
                               onChange={onChangeHandler}
                               disabled={props.isLoading}/>
                    <TextField type={'text'}
                               label={'Email'}
                               onChange={() => {
                               }}
                               value={props.email}/>
                </form>
                <div className={s.containerEditProfile__buttons}>
                    <div className={s._button}>
                        <Button variant={'secondary'}
                                onClick={onClickHandlerCancel}>
                            Cancel
                        </Button></div>
                    <div className={s._button}>
                        <Button variant={'primary'}
                                onClick={props.onClickHandlerSave}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;