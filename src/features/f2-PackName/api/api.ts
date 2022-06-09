import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    // baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
});

export const apiCard = {
    getCards(params?: GetCardsResponseType) {
        return instance.get<GetCardsRequestType>('cards/card', {params});
    },
};


type GetCardsResponseType = {
    cardAnswer?:string // не обязательно
    cardQuestion?:string // не обязательно
    cardsPack_id:string
    min?:number // не обязательно
    max?:number // не обязательно
    sortCards?:string // не обязательно
    page?:number // не обязательно
    pageCount?:number
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