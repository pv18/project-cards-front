import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './Button.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    variant?: 'primary' | 'secondary' | 'error'
    width?: string
}

export const Button = ({variant = 'primary', width = '187px', ...rest}: ButtonPropsType) => {
    let colorButton = '';
    switch (variant) {
        case 'secondary':
            colorButton = s.secondary;
            break;
        case 'error':
            colorButton = s.error;
            break;
        default:
            colorButton = s.primary;
    }
    const finalStyle = `${s.button} ${colorButton}`

    return <button className={finalStyle} style={{width: width}} {...rest}></button>
};

