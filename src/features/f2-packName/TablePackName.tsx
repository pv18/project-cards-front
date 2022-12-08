import React from 'react';
import {CardsType, FilterPackName} from './TablePackNameContainer';
import {Rating} from '../f12-rating/Rating';
import Arrow from '../../assets/img/polygon.svg';
import s from './TablePackName.module.scss';
import {getCards, removeCard, setPackNameList} from '../../store/reducers/packNameReducer';
import {changeModalEditCard} from '../../store/reducers/modalsReducer';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {Modal} from '../../components/c6-modal/Modal';
import {ModalEditCard} from '../f10-pack-name/modals/editModalCard/ModalEditCard';
import {AppDispatch, AppRootStateType} from '../../store/store';


type TablePackNamePropsType = {
    data: CardsType[]
    filter: FilterPackName
    changeFilter: (filter: FilterPackName) => void
}

export const TablePackName: React.FC<TablePackNamePropsType> = (props) => {
    const isModal = useSelector<AppRootStateType, boolean>(state => state.modals.modalCardEditCard.value)
    const dispatch = AppDispatch()
    const {packId} = useParams()

    // для удаления карточки
    const deleteCard = (id: string) => {
        if (packId) {
            dispatch(removeCard(id, packId))
        }
    };

    return (
        <>
            <table className={s.table}>
                <thead>
                <tr>
                    <th onClick={() => props.changeFilter('0name')}>
                        <span>Question</span>
                        {props.filter === '0name' && <img src={Arrow} alt="Arrow"/>}
                    </th>
                    <th>
                        <span>Answer</span>
                    </th>
                    <th onClick={() => props.changeFilter('0updated')}>
                        <span>Last Updated</span>
                        {props.filter === '0updated' && <img src={Arrow} alt="Arrow"/>}
                    </th>
                    <th onClick={() => props.changeFilter('0cardsCount')}>
                        <span>Grade</span>
                        {props.filter === '0cardsCount' && <img src={Arrow} alt="Arrow"/>}
                    </th>
                    <th>
                        <span>Actions</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                {props.data.map(c => <tr key={c.updated}>
                        <td>{c.question}</td>
                        <td>{c.answer}</td>
                        <td>{new Date(Date.parse(c.updated)).toLocaleDateString()}</td>
                        <td><Rating value={c.grade}/></td>
                        <td>
                            <div className={s.buttons}>
                                <button className={s.btn}
                                        onClick={() => dispatch(changeModalEditCard(true, c._id, c.question,'', c.answer))}
                                >
                                    Edit
                                </button>
                                <button className={`${s.btn} ${s.active}`}
                                        onClick={() => deleteCard(c._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <Modal visibility={isModal}>
                <ModalEditCard cardID={packId}/>
            </Modal>
        </>

    );
};

