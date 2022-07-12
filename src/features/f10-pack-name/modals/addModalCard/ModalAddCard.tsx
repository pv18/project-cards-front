import React from 'react';
import s from './ModalAddCard.module.scss';
import IconDelete from '../../../../assets/img/delete.svg';
import {Button} from '../../../../components/c5-Button/Button';
import {TextField} from '../../../../components/с1-Textfield/TextField';
import {useDispatch} from 'react-redux';
import {changeModalAddCard} from '../../../../store/reducers/modalsReducer';
import {apiCard, NewCardType} from '../../../f2-packName/api/api';
import {setPackNameList} from '../../../f2-packName/api/bll/packNameReducer';

interface IModalAddCard {
    cardID?: string
}

export const ModalAddCard = (props: IModalAddCard) => {
    const dispatch = useDispatch()

    const addNewCard = () => {

        if (props.cardID) {
            const params: NewCardType = {
                cardsPack_id: props.cardID,
                question: 'asdfasdf',
                answer: 'aaaa'
            }

            apiCard.addNewCard(params)
                .then(res => {
                })
                .catch(err => {
                });

            apiCard.getCards({cardsPack_id: props.cardID, pageCount: 10})
                .then(res => {
                    dispatch(setPackNameList(res.data.cards));
                });

            dispatch(changeModalAddCard(false))
        }

    };

    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <h3>Add new card</h3>
                <img src={IconDelete}
                     alt="delete"
                     onClick={() => dispatch(changeModalAddCard(false))}
                />
            </div>
            <TextField label={'Question'}/>
            <TextField label={'Answer'}/>
            <div className={s.buttons}>
                <Button width={'250px'}
                        variant={'secondary'}
                        onClick={() => dispatch(changeModalAddCard(false))}
                >
                    Cancel
                </Button>
                <Button width={'250px'}
                        onClick={() => addNewCard()}
                >
                    Save
                </Button>
            </div>
        </div>
    );
};

