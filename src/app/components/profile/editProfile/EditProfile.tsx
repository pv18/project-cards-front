import React, {ChangeEvent, useState} from 'react';
import s from './EditProfile.module.scss'
import {TextField} from "../../Textfield/TextField";
import {Button} from "../../Button/Button";
import {useNavigate} from "react-router-dom";

type EditProfilePropsType = {
    email: string,
    name: string,
    isFetching: boolean,
    onClickHandlerSave: (name: string, avatar: string) => void,
}

// Редактирование профиля пользователя
const EditProfile = (props: EditProfilePropsType) => {
    const [name, setName] = useState<string>(props.name)
    const navigate = useNavigate()
    let avatar='' //заглушка
    // обработчик для изменения имени профиля
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    // обработчик для изменения аватарки
    const onClickHandlerAvatar = () => {
        alert("Аватар будет изменен")
    }
    // обработчик для кнопки Cancel (возврат на предыдущую страницу без сохранения)
    const onClickHandlerCancel = () => {
        navigate(-1)
    }

    // обработчик для кнопки Save (передать параметры контейнерной компоненте (доделать вернуться на предыдущую страницу)
    const onClickHandlerSave = () => {
        props.onClickHandlerSave(name, avatar)
    }

    return (
        <div className={s.blockEditProfile}>
            {props.isFetching && <span>Идет загрузка</span>}
            <div className={s.containerEditProfile}>
                <span className={s.containerEditProfile__personal}>
                    Personal Information
                </span>
                <div className={s.containerEditProfile__avatar}>
                    <div className={s.containerEditProfile__avatar_photo}/>
                    <div className={s.containerEditProfile__avatar_icon}
                         onClick={onClickHandlerAvatar}/>
                </div>
                <form className={s.containerEditProfile__form}>
                    <TextField type={'text'}
                               label={'Nickname'}
                               value={name}
                               onChange={onChangeHandler}/>
                    <TextField type={'text'}
                               label={'Email'}
                               value={props.email}/>
                </form>
                <div className={s.containerEditProfile__buttons}>
                    <div className={s._button}>
                        <Button variant={"secondary"}
                                onClick={onClickHandlerCancel}
                                disabled={props.isFetching}>
                            Cancel
                        </Button></div>
                    <div className={s._button}>
                        <Button variant={"primary"}
                                onClick={onClickHandlerSave}
                                disabled={props.isFetching}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;