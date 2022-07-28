import React, {useState} from 'react';
import s from './ModalAddCard.module.scss';
import IconDelete from '../../../../assets/img/delete.svg';
import {Button} from '../../../../components/c5-Button/Button';
import {TextField} from '../../../../components/c1-Textfield/TextField';
import {useDispatch} from 'react-redux';
import {addCardTC, changeModalAddCard} from '../../../../store/reducers/modalsReducer';
import {setPackNameList} from '../../../../store/reducers/packNameReducer';
import {CardAPI, NewCardType} from '../../../../api/api';
import {AppDispatch} from '../../../../store/store';

interface IModalAddCard {
    cardID?: string
}

export const ModalAddCard = (props: IModalAddCard) => {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    const dispatch = AppDispatch()

    // Функция добавления карточки
    const addNewCard = () => {

        if (props.cardID) {
            const params: NewCardType = {
                cardsPack_id: props.cardID,
                question: question,
                answer: answer
            }

            dispatch(addCardTC(params, props.cardID))

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
            <TextField label={'Question'}
                       value={question}
                       onChange={(e) => setQuestion(e.currentTarget.value)}
            />
            <TextField label={'Answer'}
                       value={answer}
                       onChange={(e) => setAnswer(e.currentTarget.value)}
            />
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

