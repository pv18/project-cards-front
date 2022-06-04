
type AppStateType = {
	isAuth: boolean
	isLoading: boolean
}


const initialState: AppStateType = {
	isAuth: false,
	isLoading: false,
};


export type AppActionsType = ReturnType<typeof setIsAuth> | ReturnType<typeof setIsLoading>



export const appReducer = (state = initialState, action: AppActionsType):AppStateType => {
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
		default: return state;
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
