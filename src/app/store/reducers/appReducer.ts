type AppStateType = {
    isAuth: boolean
    isLoading: boolean
    currentPage: number
    pageCount: number
    //userId: string
}


const initialState: AppStateType = {
    isAuth: false,
    isLoading: false,
    currentPage: 1,
    pageCount: 10,
    //userId: ''
};


export type AppActionsType = ReturnType<typeof setIsAuth>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setPagination>


export const appReducer = (state = initialState, action: AppActionsType): AppStateType => {
    switch (action.type) {
        case 'APP/SET-IS-AUTH': {
            return {
                ...state,
                isAuth: action.isAuth,
            };
        }
        case 'APP/SET-IS-LOADING': {
            return {
                ...state,
                isLoading: action.isLoading,
            };
        }
        case 'APP/SET-PAGINATION': {
            return {
                ...state,
                currentPage: action.currentPage,
                pageCount: action.pageCount,
            }
        }
        default:
            return state;
    }
};


export const setIsAuth = (isAuth: boolean) => {
    return {
        type: 'APP/SET-IS-AUTH',
        isAuth,
    } as const;
};

export const setIsLoading = (isLoading: boolean) => {
    return {
        type: 'APP/SET-IS-LOADING',
        isLoading,
    } as const;
};
export const setPagination = (pageCount: number, currentPage: number) => {
    return {
        type: 'APP/SET-PAGINATION',
        pageCount,
        currentPage,
    } as const;
};
