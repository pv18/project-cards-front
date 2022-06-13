import React, { FC } from 'react';
import {Button} from '../Button/Button';
import s from './Modal.module.scss';

interface IModal {
    children?: React.ReactNode;
    visibility: boolean;
    changeVisibility: (value: boolean) => void;
}

export const Modal: FC<IModal> = (props) => {
    if (!props.visibility) {
        return null;
    }
    return (
        <div className={s.modal} onClick={() => props.changeVisibility(false)}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <div className={s.btnClose}
                     onClick={() => props.changeVisibility(false)}
                >
                </div>
                {props.children}
            </div>
        </div>
    );
};

