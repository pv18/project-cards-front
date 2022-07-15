import React, {useEffect, useState} from 'react';

import {TablePackName} from './TablePackName';
import {CardPackNameType, setPackNameList} from './api/bll/packNameReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../store/store';
import {useParams} from 'react-router-dom';
import {apiCard} from './api/api';


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
    const dispatch = useDispatch();

    useEffect(() => {
        if (packId) {
            apiCard.getCards({cardsPack_id: packId, pageCount: 10, sortCards: filter})
                .then(res => {
                    dispatch(setPackNameList(res.data.cards));
                });
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

