import React from 'react';
import s from './ModalAdd.module.scss';
import IconDelete from '../../../../assets/img/delete.svg';
import {Button} from '../../../Button/Button';
import {TextField} from '../../../Textfield/TextField';

export const ModalAdd = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <h3>Add new pack</h3>
                <img src={IconDelete} alt="delete"/>
            </div>
            <TextField label={'Name pack'}/>
            <div className={s.buttons}>
                <Button width={'150px'} variant={'secondary'}>Cancel</Button>
                <Button width={'150px'}>Save</Button>
            </div>
        </div>
    );
};

