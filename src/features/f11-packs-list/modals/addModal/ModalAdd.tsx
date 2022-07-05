import React from 'react';
import s from './ModalAdd.module.scss';
import IconDelete from '../../../../assets/img/delete.svg';
import {Button} from '../../../../components/c5-Button/Button';
import {TextField} from '../../../../components/с1-Textfield/TextField';
import {useDispatch} from 'react-redux';
import {changeModalADD} from '../../../../store/reducers/modalsReducer';

export const ModalAdd = () => {
    const dispatch = useDispatch()

    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <h3>Add new pack</h3>
                <img src={IconDelete}
                     alt="delete"
                     onClick={() => dispatch(changeModalADD(false))}
                />
            </div>
            <TextField label={'Name pack'}/>
            <div className={s.buttons}>
                <Button width={'150px'}
                        variant={'secondary'}
                        onClick={() => dispatch(changeModalADD(false))}
                >
                    Cancel
                </Button>
                <Button width={'150px'}>Save</Button>
            </div>
        </div>
    );
};

