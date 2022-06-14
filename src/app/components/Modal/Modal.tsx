import React, { FC } from 'react';
import {Button} from '../Button/Button';
import s from './Modal.module.scss';

interface IModal {
    children?: React.ReactNode;
    visibility: boolean;
    // changeVisibility: (value: boolean) => void;
}

export const Modal: FC<IModal> = (props) => {
    if (!props.visibility) {
        return null;
    }
    return (
        <div className={s.modal}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
};

