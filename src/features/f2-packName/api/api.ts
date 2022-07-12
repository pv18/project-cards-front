import axios from 'axios';
import {LearnCardsStateType} from '../../../store/reducers/learnCardsReducer';

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    // baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
});

export const apiCard = {
    getCards(params?: GetCardsResponseType) {
        return instance.get<LearnCardsStateType>('cards/card', {params});
    },

    deleteCard(id: string) {
        return instance.delete(`cards/card?${id}`)
    },

    addNewCard(card?: NewCardType) {
        return instance.post('cards/card', {card})
    }
};


type GetCardsResponseType = {
    cardAnswer?: string // не обязательно
    cardQuestion?: string // не обязательно
    cardsPack_id: string
    min?: number // не обязательно
    max?: number // не обязательно
    sortCards?: string // не обязательно
    page?: number // не обязательно
    pageCount?: number
}

type GetCardsRequestType = {
    cards: [
        {
            answer: string
            question: string
            cardsPack_id: string
            grade: number
            shots: number
            user_id: string
            created: string
            updated: string
            _id: string
        },
    ]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}

export type NewCardType = {
    cardsPack_id: string
    question?: string // если не отправить будет таким
    answer?: string // если не отправить будет таким
    grade?: number // 0..5, не обязателен
    shots?: number // не обязателен
    answerImg?: string // не обязателен
    questionImg?: string // не обязателен
    questionVideo?: string // не обязателен
    answerVideo?: string // не обязателен
}
