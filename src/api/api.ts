import axios from 'axios';

import {PackStateType} from '../store/reducers/tablePacksReducer';
import {LearnCardsStateType} from '../store/reducers/learnCardsReducer';

export type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export type AuthResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;
// количество колод
    created: '';
    updated: '';
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error?: string;
}

export type RegistrationDataType = {
    email: string,
    password: string,
}

export type RegistrationResponseType = {
    addUser: any,
    error?: string,
}
export type LogOutResponseType = {
    info: string,
    error: string;
}

export type RecoveryResponseType = {
    info: string,
    error: string;
}

export type NewPasswordResponseType = {
    info: string
    error: string
}

type UpdatedGradeType = {
    _id: string,
    cardsPack_id:  string,
    card_id: string,
    user_id:  string,
    grade: number,
    shots: number,
}

export type GradeResponseType = {
    updatedGrade: UpdatedGradeType,
}

export type GetParamsType = {
    packName?: string
    min?: number
    max?: number
    sortPacks?: string
    page?: number
    pageCount?: number
    user_id?: string
}

type NewCardsPack = {
    name?: string
    deckCover?: string
    private?: boolean
}

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

export type ChangeCardType = {
    _id: string
    question: string
    comments: string
    answer: string
}

const instance = axios.create({
    // process.env.REACT_APP_BACK_URL || для gh-page
    // https://neko-back.herokuapp.com/2.0/ для gh-page
    // http://localhost:7542/2.0/
    // baseURL: 'http://localhost:7542/2.0/',
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
});


export const AuthAPI = {
    // удалить
    loginMe(data: LoginDataType) {
        return instance.post<AuthResponseType>('auth/login', data);
    },
    registrationMe(data: RegistrationDataType) {
        return instance.post<RegistrationResponseType>('auth/register', data);
    },
    recoveryPass(email: string) {
        return instance.post<RecoveryResponseType>('auth/forgot', {
            email, // кому восстанавливать пароль
            from: '<kisseli@mail.ru>',
            // можно указать разработчика фронта)
            message: `<div style="background-color: #9A91C8; padding: 50px 20px; text-align: center; border: 2px solid #2D2E46; border-radius: 10px">
            <span style="font-weight: bold; font-size: 1.2em;" style="font-size: 1.2em;">Password recovery link:</span> 
            <a href='http://localhost:3000/#/new_password/$token$'>link for recovery password.</a>
            <p>Follow the link for password recovery and follow the instructions.</p>
            </div>`, // хтмп-письмо, вместо $token$ бэк вставит токен
        })
            .then(res => res.data);
    },
    newPass(password: string, resetPasswordToken: string | undefined) {
        return instance.post('/auth/set-new-password', {password, resetPasswordToken})
            .then(res => res.data);
    },
    logOut() {
        return instance.delete<LogOutResponseType>('/auth/me', {})
            .then(res => res.data);
    },

};

export const ProfileAPI = {
    getProfile() {
        return instance.post<AuthResponseType>('/auth/me', {})
            .then(res => {
                return res.data;
            });
    },
    putProfile(name: string, avatar: string | undefined) {
        return instance.put('/auth/me', {name, avatar})
            .then(res => {
                return res.data;
            });
    },
};

export const ApiCards = {
    getCards(params?: GetParamsType) {
        return instance.get<PackStateType>('cards/pack', {params});
    },

    postCards(cardsPack: NewCardsPack) {
        return instance.post<PackStateType>('cards/pack', {cardsPack});
    },

    deletePack(idPack: string) {
        return instance.delete<PackStateType>('cards/pack', {params: {id: idPack}});
    },
    sendRate(grade: number, card_id: string) {
        return instance.put<GradeResponseType>('/cards/grade', {grade, card_id})
            .then(res => res.data);
    },
};


export const CardAPI = {
    getCards(params?: GetCardsResponseType) {
        return instance.get<LearnCardsStateType>('cards/card', {params});
    },

    deleteCard(id: string) {
        return instance.delete('cards/card', {params:{id: id}})
    },

    addNewCard(card?: NewCardType) {
        return instance.post('cards/card', {card})
    },

    changeCard(card?: ChangeCardType) {
        return instance.put('cards/card', {card})
    }
};





