import React, {useEffect, useState} from 'react';

import {TablePackName} from './TablePackName';
import {CardPackNameType, getCards} from '../../store/reducers/packNameReducer';
import {useSelector} from 'react-redux';
import {AppDispatch, AppRootStateType} from '../../store/store';
import {useParams} from 'react-router-dom';


export type CardsType = {
    answer: string
    question: string
    comments: string
    cardsPack_id: string
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    _id: string
}

export type FilterPackName = '0name' | '0cardsCount' | '0updated'

interface ITablePackNameContainer {
    filterTitle: string
}

export const TablePackNameContainer = (props: ITablePackNameContainer) => {
    const [filter, setFilter] = useState<FilterPackName>('0updated');

    const cards = useSelector<AppRootStateType, CardPackNameType[]>(state => state.packName.cards);
    const {packId} = useParams();
    const dispatch = AppDispatch();

    useEffect(() => {
        if (packId) {
            dispatch(getCards(packId, 10, filter))
        }
    }, [filter]);

    const filteredCards = cards.filter(card => {
        return card.question.toLowerCase().includes(props.filterTitle.toLowerCase())
    })

    return (
        <div>
            <TablePackName data={filteredCards} filter={filter} changeFilter={setFilter}/>
        </div>
    );
};

