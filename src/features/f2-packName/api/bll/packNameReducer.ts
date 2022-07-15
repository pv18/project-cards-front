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

/*export const getCards = (cardsPack_id: string, pageCount: number): AppThunkType => (dispatch) => {
    dispatch(setIsLoading(true));
    apiCard.getCards({cardsPack_id: cardsPack_id, pageCount: pageCount})
        .then(res => {
            dispatch(setPackNameList(res.data.cards));
        })
        .finally(() => {
            dispatch(setIsLoading(false));
        });
};*/
