import {AuthAPI, LoginDataType} from '../../api/api';
import {AppThunkType} from '../store';
import {setProfile} from "./profileReducer";
import {setIsAuth} from "./appReducer";

type UserDataType = {
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

type LoginStateType = {
	userData: UserDataType
	isLogin: boolean,
	error?: string,
	activeLoginBtn: boolean;
}

export type LoginActionType = ReturnType<typeof setDataLoginAC> 
	| ReturnType<typeof setErrorMessage>
	| ReturnType<typeof isToggleLoginBtn>
	| ReturnType<typeof setIsLogin>


const initialState: LoginStateType = {
	userData: {
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
	},
	isLogin: false,
	error: '',
	activeLoginBtn: false,
};

export const loginReducer = (state = initialState, action: LoginActionType) => {

	switch (action.type) {
		case 'LOGIN/SET-DATA': {
			return {
				...state,
				...state.userData,
				userData: action.data,
			};
		}
		case 'LOGIN/SET-ERROR': {
			return {
				...state,
				error: action.error,
			};
		}
		case 'LOGIN/IS-TOGGLE-ACTIVE-BTN': {
			return {
				...state,
				activeLoginBtn: action.isToggle,
			};
		}
		case 'LOGIN/SET-IS-LOGIN': {
			return {
				...state,
				isLogin: action.isLogin,
			};
		}

		default: return state;
	}
};

// actions creators

// userData записываем данные в state
const setDataLoginAC = (data: UserDataType) => {
	return {
		type: 'LOGIN/SET-DATA',
		data,
	} as const;
};

// error записываем ошибку в state
const setErrorMessage = (error: string) => {
	return {
		type: 'LOGIN/SET-ERROR',
		error,
	} as const;
};

// вовремя запроса disabled button login
const isToggleLoginBtn = (isToggle: boolean) => {
	return {
		type: 'LOGIN/IS-TOGGLE-ACTIVE-BTN',
		isToggle,
	} as const;
};

// если залогинились true, default false
const setIsLogin = (isLogin: boolean) => {
	return {
		type: 'LOGIN/SET-IS-LOGIN',
		isLogin,
	} as const;
};

// thunk creator

export const setDataLoginTC = (data: LoginDataType): AppThunkType => (dispatch) => {
	dispatch(isToggleLoginBtn(true));
	AuthAPI.loginMe(data)
		.then(res => {
			dispatch(setDataLoginAC(res.data));
			dispatch(setProfile(res.data));
			dispatch(setIsAuth(true));
			dispatch(setIsLogin(true));
		})
		.catch(error => {
			dispatch(setErrorMessage(error.response.data.error));
		})
		.finally(() => {
			dispatch(isToggleLoginBtn(false));
		});
};