import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {useParams} from 'react-router-dom';

import {AppRootStateType} from '../../app/store/store';

import {TablePackName} from './TablePackName';
import {apiCard} from './api/api';
import {CardPackNameType, setPackNameList} from './api/bll/packNameReducer';


export type CardsType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    _id: string
}

export type FilterPackName = 'answer' | 'question' | 'updated' | 'grade'

interface ITablePackNameContainer {
    data: CardsType[]
}

export const TablePackNameContainer: React.FC<ITablePackNameContainer> = (props) => {
    const [filter, setFilter] = useState<FilterPackName>('updated');

    const getFilteredCards = (cards: CardPackNameType[], filter: FilterPackName) => {
        switch (filter) {
            case 'question':
                return cards.sort((a, b) => a.question < b.question ? 1 : -1);
            case 'answer':
                return cards.sort((a, b) => a.answer < b.answer ? 1 : -1);
            case 'updated':
                return cards.sort((a, b) => a.updated < b.updated ? 1 : -1);
            case 'grade':
                return cards.sort((a, b) => b.grade - a.grade);
            default:
                return cards;
        }
    };
    const filteredCards = getFilteredCards(props.data, filter);
    return (
        <div>
            <TablePackName data={filteredCards} filter={filter} changeFilter={setFilter}/>
        </div>
    );
};

