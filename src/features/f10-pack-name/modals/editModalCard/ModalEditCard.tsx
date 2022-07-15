import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import IconDelete from '../../../../assets/img/delete.svg';
import {Button} from '../../../../components/c5-Button/Button';
import {TextField} from '../../../../components/c1-Textfield/TextField';
import {apiCard, ChangeCardType} from '../../../f2-packName/api/api';
import {setPackNameList} from '../../../f2-packName/api/bll/packNameReducer';
import {AppRootStateType} from '../../../../store/store';

import {changeModalEditCard} from '../../../../store/reducers/modalsReducer';

import s from './ModalEditCard.module.scss';

interface IModalEditCard {
    cardID?: string
}

export const ModalEditCard = (props: IModalEditCard) => {
    const question = useSelector<AppRootStateType, string>(state => state.modals.modalCardEditCard.question);
    const answer = useSelector<AppRootStateType, string>(state => state.modals.modalCardEditCard.comments);
    const cardID = useSelector<AppRootStateType, string>(state => state.modals.modalCardEditCard.id);
    const [titleQuestion, setTitleQuestion] = useState<string>(question);
    const [titleAnswer, setTitleAnswer] = useState<string>(answer);


    const dispatch = useDispatch();

    // Функция изменения карточки
    const changeCard = () => {

        if (props.cardID) {
            const params: ChangeCardType = {
                _id: cardID,
                question: titleQuestion,
                comments: titleAnswer,
            };

            apiCard.changeCard(params)
                .then(res => {
                })
                .catch(err => {
                });

            apiCard.getCards({cardsPack_id: props.cardID, pageCount: 10})
                .then(res => {
                    dispatch(setPackNameList(res.data.cards));
                });

            dispatch(changeModalEditCard(false, cardID, titleQuestion, titleAnswer));
        }

    };

    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <h3>СARD EDITING</h3>
                <img src={IconDelete}
                     alt='delete'
                     onClick={() => dispatch(changeModalEditCard(false, cardID, question, titleAnswer))}
                />
            </div>
            <TextField label={'edit question'}
                       value={titleQuestion}
                       onChange={(e) => setTitleQuestion(e.currentTarget.value)}
            />
            <TextField label={'edit answer'}
                       value={titleAnswer}
                       onChange={(e) => setTitleAnswer(e.currentTarget.value)}
            />
            <div className={s.buttons}>
                <Button width={'250px'}
                        variant={'secondary'}
                        onClick={() => dispatch(changeModalEditCard(false, cardID, titleQuestion, titleAnswer))}
                >
                    Cancel
                </Button>
                <Button width={'250px'}
                        onClick={() => changeCard()}
                >
                    Save
                </Button>
            </div>
        </div>
    );
};

