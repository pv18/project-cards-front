import React from 'react';
import {CardsType, FilterPackName} from './TablePackNameContainer';
import {Rating} from '../../app/components/Rating/Rating';
import Arrow from '../../app/assets/img/polygon.svg';
import s from './TablePackName.module.scss';


type TablePackNamePropsType = {
    data: CardsType[]
    filter: FilterPackName
    changeFilter: (filter: FilterPackName) => void
}

export const TablePackName: React.FC<TablePackNamePropsType> = (props) => {
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
            </tr>
            </thead>
            <tbody>
            {props.data.map(c => <tr key={c.updated}>
                    <td>{c.question}</td>
                    <td>{c.answer}</td>
                    <td>{new Date(Date.parse(c.updated)).toLocaleDateString()}</td>
                    <td><Rating value={c.grade}/></td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

