import React from 'react';
import {CardsType, FilterPackName} from './TablePackNameContainer';
import {Rating} from '../f12-rating/Rating';
import Arrow from '../../assets/img/polygon.svg';
import s from './TablePackName.module.scss';
import {apiCard} from './api/api';


type TablePackNamePropsType = {
    data: CardsType[]
    filter: FilterPackName
    changeFilter: (filter: FilterPackName) => void
}

export const TablePackName: React.FC<TablePackNamePropsType> = (props) => {

    // для удаления карточки
    // const deleteCard = (id: string) => {
    //     apiCard.deleteCard(id);
    // };

    return (
        <table className={s.table}>
            <thead>
            <tr>
                <th onClick={() => props.changeFilter('question')}>
                    <span>Question</span>
                    {props.filter === 'question' && <img src={Arrow} alt="Arrow"/>}
                </th>
                <th onClick={() => props.changeFilter('answer')}>
                    <span>Answer</span>
                    {props.filter === 'answer' && <img src={Arrow} alt="Arrow"/>}
                </th>
                <th onClick={() => props.changeFilter('updated')}>
                    <span>Last Updated</span>
                    {props.filter === 'updated' && <img src={Arrow} alt="Arrow"/>}
                </th>
                <th onClick={() => props.changeFilter('grade')}>
                    <span>Grade</span>
                    {props.filter === 'grade' && <img src={Arrow} alt="Arrow"/>}
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
                            <button className={s.btn}>Edit</button>
                            <button className={`${s.btn} ${s.active}`}>
                                Delete
                            </button>
                        </div>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

