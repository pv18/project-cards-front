import React from 'react';
import IconDelete from '../../../../assets/img/delete.svg';
import s from './ModalDelete.module.scss';
import {Button} from '../../../Button/Button';

export const ModalDelete = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <h3>Delete Pack</h3>
                <img src={IconDelete} alt="delete"/>
            </div>
            <p className={s.message}>Do you really want to remove <b>Pack Name - Name Pack?</b> <br/>
                All cards will be excluded from this course.</p>
            <div className={s.buttons}>
                <Button width={'150px'} variant={'secondary'}>Cancel</Button>
                <Button width={'150px'} variant={'error'}>Delete</Button>
            </div>
        </div>
    );
};

