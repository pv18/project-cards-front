import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import s from './TextField.module.scss';
import IconEye from '../../assets/img/eye.svg';
import IconEyeCrossed from '../../assets/img/eye-crossed.svg';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputType = 'text' | 'password'

type TextFieldPropsType = DefaultInputPropsType & {
    label?: string
    type?: InputType
}

export const TextField = ({label, type = 'text', ...rest}: TextFieldPropsType) => {
    const [value, setValue] = useState<InputType>(type)
    const [isPassword, setIsPassword] = useState<boolean>(false)

    // изменение иконки при скрытом вводе пароля
    const changeHandler = () => {
        if (value === 'password') {
            setValue('text')
            setIsPassword(true)
        } else {
            setValue('password')
            setIsPassword(false)
        }
    }

    return (
        <div className={s.group}>
            <input type={value} required {...rest}/>
            <span className={s.highlight}></span>
            <span className={s.bar}></span>
            <label>{label}</label>
            {type === 'password' &&
                <div className={s.icon} onClick={changeHandler}>
                    {isPassword ? <img src={IconEye} alt="eye"/> : <img src={IconEyeCrossed} alt="eye"/>}
                </div>
            }
        </div>
    );
};


