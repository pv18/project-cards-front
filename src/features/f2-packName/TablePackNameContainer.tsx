import React, {useEffect, useState} from 'react';

import {TablePackName} from './TablePackName';
import {CardPackNameType, setPackNameList} from './api/bll/packNameReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../store/store';
import {useParams} from 'react-router-dom';
import {apiCard} from './api/api';
import {apiCards} from '../f1-packsList/api/api';


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

// interface ITablePackNameContainer {
//     data: CardsType[]
// }

export const TablePackNameContainer = () => {
    const [filter, setFilter] = useState<FilterPackName>('updated');

    const cards = useSelector<AppRootStateType, CardPackNameType[]>(state => state.packName.cards);
    const {packId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (packId) {
            apiCard.getCards({cardsPack_id: packId, pageCount: 10})
                .then(res => {
                    dispatch(setPackNameList(res.data.cards));
                });
        }
    }, []);




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
    const filteredCards = getFilteredCards(cards, filter);
    return (
        <div>
            <TablePackName data={filteredCards} filter={filter} changeFilter={setFilter}/>
        </div>
    );
};

