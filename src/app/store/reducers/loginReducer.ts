import {AuthAPI, LoginDataType} from '../../api/api';
import {AppThunkType} from '../store';


type LoginStateType = {
	_id: string;
	email: string;
	name: string;
	avatar?: string;
	publicCardPacksCount: number;
// количество колод
	created: string;
	updated: string;
	isAdmin: boolean;
	verified: boolean; // подтвердил ли почту
	rememberMe: boolean;
	error?: string;
}

export type LoginActionType = ReturnType<typeof setDataLoginAC> | ReturnType<typeof setErrorMessage>


const initialState: LoginStateType = {
	_id: '',
	email: '',
	name: '',
	avatar: '',
	publicCardPacksCount: 0,
// количество колод
	created: '',
	updated: '',
	isAdmin: false,
	verified: false, // подтвердил ли почту
	rememberMe: false,
	error: '',
};

export const loginReducer = (state = initialState, action: LoginActionType) => {

	switch (action.type) {
		case 'LOGIN/SET-DATA': {
			return {
				...state,
				...action.data,
			};
		}
		case 'LOGIN/SET-ERROR': {
			return {
				...state,
				error: action.error,
			};
		}

		default: return state;
	}
};


const setDataLoginAC = (data: LoginStateType) => {
	return {
		type: 'LOGIN/SET-DATA',
		data,
	} as const;
};

const setErrorMessage = (error: string) => {
	return {
		type: 'LOGIN/SET-ERROR',
		error,
	} as const;
};

export const setDataLoginTC = (data: LoginDataType): AppThunkType => (dispatch) => {
	AuthAPI.loginMe(data)
		.then(res => {
			dispatch(setDataLoginAC(res.data));
		})
		.catch(error => {
			dispatch(setErrorMessage(error.response.data.error));
		});

	// после окночания запроса возрощаем true что бы раздизайблить кнопку
	return true;
};