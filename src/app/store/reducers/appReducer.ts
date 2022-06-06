
type AppStateType = {
	isAuth: boolean
}

const initialState: AppStateType = {
	isAuth: false,	
};

export type AppActionsType = ReturnType<typeof setIsAuth> 

export const appReducer = (state = initialState, action: AppActionsType) => {
	switch (action.type) {
		case 'APP/SET-IS-AUTH': {
			return {
				...state,
				isAuth: action.isAuth,
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
