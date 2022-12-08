import React, {FC} from 'react';
import IconDelete from '../../../../assets/img/delete.svg';
import s from './ModalDelete.module.scss';
import {Button} from '../../../../components/c5-Button/Button';

interface IModalDelete {
    name: string
    onClickDeletePack: (action?: 'delete') => void
}

export const ModalDelete: FC<IModalDelete> = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <h3>Delete Pack</h3>
                <img src={IconDelete}
                     alt="delete"
                     onClick={() => props.onClickDeletePack()}
                />
            </div>
            <p className={s.message}>Do you really want to remove <b>Pack Name - {props.name}?</b> <br/>
                All cards will be excluded from this course.</p>
            <div className={s.buttons}>
                <Button width={'150px'}
                        variant={'secondary'}
                        onClick={() => props.onClickDeletePack()}
                >
                    Cancel
                </Button>
                <Button width={'150px'}
                        variant={'error'}
                        onClick={() => props.onClickDeletePack('delete')}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
};

