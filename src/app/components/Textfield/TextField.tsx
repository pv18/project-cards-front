import React, {DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import s from './TextField.module.scss';
import {ReactComponent as IconEye} from '../../assets/img/eye.svg';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputType = 'text' | 'password'

type TextFieldPropsType = DefaultInputPropsType & {
    label?: string
    type?: InputType
}

export const TextField = ({label, type = 'text', ...rest}: TextFieldPropsType) => {
    const [title, setTitle] = useState<string>('')
    return (
        <div className={s.group}>
            <input type={type} required {...rest}/>
            <span className={s.highlight}></span>
            <span className={s.bar}></span>
            <label>{label}</label>
            {type === 'password' && <IconEye className={s.icon}/>}
        </div>
    );
};

