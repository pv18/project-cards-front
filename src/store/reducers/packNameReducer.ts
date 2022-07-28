import {AppThunkType} from '../store';
import {CardAPI} from '../../api/api';

import {setIsLoading} from './appReducer';

export type CardPackNameType = {
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

export type PackNameStateType = {
    cards: CardPackNameType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}

export type PackNameActionType = ReturnType<typeof setPackNameList>

const initialState: PackNameStateType = {
    cards: [],
    cardsTotalCount: 10,
    maxGrade: 6,
    minGrade: 0,
    page: 1,
    pageCount: 4,
    packUserId: '',
};

export const packNameReducer = (state = initialState, acton: PackNameActionType): PackNameStateType => {
    switch (acton.type) {
        case 'PACK-NAME/SET-PACK_NAME': {
            return {
                ...state,
                cards: acton.data,
            };
        }

        default:
            return state;
    }
};


export const setPackNameList = (data: CardPackNameType[]) => {
    return {
        type: 'PACK-NAME/SET-PACK_NAME',
        data,
    } as const;
};

export const getCards = (cardsPack_id: string, pageCount: number, sortCards?: string): AppThunkType => (dispatch) => {
    dispatch(setIsLoading(true));
    CardAPI.getCards({cardsPack_id, pageCount, sortCards})
        .then(res => {
            dispatch(setPackNameList(res.data.cards));
        })
        .catch((err) => {
        })
        .finally(() => {
            dispatch(setIsLoading(false));
        });
};

export const removeCard = (id: string, packId: string): AppThunkType => (dispatch) => {
    dispatch(setIsLoading(true));
    CardAPI.deleteCard(id)
        .then(res => {
            CardAPI.getCards({cardsPack_id: packId, pageCount: 10})
                .then(res => {
                    dispatch(setPackNameList(res.data.cards));
                });
        })
        .finally(() => {
            dispatch(setIsLoading(false));
        });
};
