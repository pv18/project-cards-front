type AppStateType = {
    isAuth: boolean
    isLoading: boolean
    currentPage: number
    pageCount: number
    packName: string
    isId: boolean
    error: string
    activeMenuItem: string
}


const initialState: AppStateType = {
    isAuth: false,
    isLoading: false,
    currentPage: 1,
    pageCount: 10,
    packName: '',
    isId: false,
    error: '',
    activeMenuItem: '',
};


export type AppActionsType = ReturnType<typeof setIsAuth>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setPagination>
    | ReturnType<typeof setPackNameForSearch>
    | ReturnType<typeof setId>
    | ReturnType<typeof setErrorMessage>
    | ReturnType<typeof setActiveMenuItem>


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
            };
        }
        case 'APP/SET-PACK-NAME-FOR-SEARCH': {
            return {
                ...state,
                packName: action.packName,
            };
        }
        case 'APP/SET-ID': {
            return {
                ...state,
                isId: action.isId,
            };
        }
        case 'APP/SET-ERROR': {
            return {
                ...state,
                error: action.error,
            };
        }
        case 'APP/SET-ACTIVE-MENU-ITEM': {
            return {
                ...state,
                activeMenuItem: action.activeMenuItem,
            };
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
//
export const setPackNameForSearch = (packName: string) => {
    return {
        type: 'APP/SET-PACK-NAME-FOR-SEARCH',
        packName,
    } as const;
};
// для фильтрации мои или все (и для отображения на странице профайла)
export const setId = (isId: boolean) => {
    return {
        type: 'APP/SET-ID',
        isId,
    } as const;
};
// сетаю ошибку в стейт
export const setErrorMessage = (error: string) => {
    return {
        type: 'APP/SET-ERROR',
        error,
    } as const;
};
// для стилизации пунктов меню активной страницы
export const setActiveMenuItem = (activeMenuItem: string) => {
    debugger;
    return {
        type: 'APP/SET-ACTIVE-MENU-ITEM',
        activeMenuItem,
    } as const;
};