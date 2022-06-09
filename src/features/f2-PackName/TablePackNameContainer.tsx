import React, {useEffect, useState} from 'react';
import {TablePackName} from './TablePackName';
import {apiCard} from './api/api';
import {useDispatch, useSelector} from 'react-redux';
import {CardPackNameType, setPackNameList} from './api/bll/packNameReducer';
import {AppRootStateType} from '../../app/store/store';

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

export const TablePackNameContainer = () => {
    const [filter, setFilter] = useState<FilterPackName>('updated')
    const cards = useSelector<AppRootStateType, CardPackNameType[]>(state => state.packName.cards)
    const dispatch = useDispatch()

    // 62a1fe66b3c86440ec4713ab
    // 62a075dbe7b613cfe4265865

    useEffect(() => {
        apiCard.getCards({cardsPack_id: '62a1fe66b3c86440ec4713ab'})
            .then(res => {
                dispatch(setPackNameList(res.data.cards))
            })
    }, [])

    const getFilteredCards = (cards: CardPackNameType[], filter: FilterPackName) => {
        switch (filter) {
            case 'question':
                return cards.sort((a, b) => a.question < b.question ? 1 : -1)
            case 'answer':
                return cards.sort((a, b) => a.answer < b.answer ? 1 : -1)
            case 'updated':
                return cards.sort((a, b) => a.updated < b.updated ? 1 : -1)
            case 'grade':
                return cards.sort((a, b) => a.grade - b.grade)
            default:
                return cards
        }
    }
    const filteredCards = getFilteredCards(cards, filter)
    return (
        <div>
            <TablePackName data={filteredCards} filter={filter} changeFilter={setFilter}/>
        </div>
    );
};

