import {AuthAPI, LoginDataType, RegistrationDataType} from '../../api/api';
import {AppThunkType} from '../store';

import {setProfile} from './profileReducer';
import {setIsAuth} from './appReducer';

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

type AuthStateType = {
    userData: UserDataType
    isLogin: boolean,
    error?: string,
    activeLoginBtn: boolean;
    registration: boolean,
}

export type AuthActionsType = ReturnType<typeof setDataLoginAC>
    | ReturnType<typeof setErrorMessage>
    | ReturnType<typeof isToggleLoginBtn>
    | ReturnType<typeof recoveryPassword>
    | ReturnType<typeof logOut>
    | ReturnType<typeof setRegistrationStatus>

const initialState: AuthStateType = {
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
    registration: false,
};

export const authReducer = (state = initialState, action: AuthActionsType) => {

    switch (action.type) {
        case 'LOGIN/SET-DATA': {
            return {
                ...state,
                ...state.userData,
                userData: action.data,
            };
        }
        case 'LOGIN/IS-TOGGLE-ACTIVE-BTN': {
            return {
                ...state,
                activeLoginBtn: action.isToggle,
            };
        }
        case 'LOGIN/RECOVERY-PASSWORD': {
            return {
                ...state,
            };
        }
        case 'LOGIN/LOG-OUT': {
            return {
                ...state,
                /*...state.userData, email: '',*/
            };
        }
        case 'REGISTRATION/SET-STATUS': {
            return {
                ...state,
                registration: action.registration,
            };
        }
        case 'AUTH/SET-ERROR': {
            return {
                ...state,
                error: action.error,
            };
        }
        default:
            return state;
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
        type: 'AUTH/SET-ERROR',
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


const logOut = () => {
    return {
        type: 'LOGIN/LOG-OUT',
    } as const;
};

//
const recoveryPassword = (info: string, error: string) => {
    return {
        type: 'LOGIN/RECOVERY-PASSWORD',
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
        })
        .catch(error => {
            dispatch(setErrorMessage(error.response.data.error));
        })
        .finally(() => {
            dispatch(isToggleLoginBtn(false));
        });
};

export const setLogOut = (): AppThunkType => (dispatch) => {
    AuthAPI.logOut()
        .then(resData => {
            if (resData.info.length) {
                dispatch(logOut());
                dispatch(setIsAuth(false));
            }
        })
        .catch(error => {
            // вывести ошибку
            // dispatch(setErrorMessage(error.response.data.error));
        });
};

export const recoveryPass = (email: string): AppThunkType => (dispatch) => {
    AuthAPI.recoveryPass(email)
        .then(resData => {
            dispatch(recoveryPassword(resData.info, resData.error));
        });
};


/*const setErrorMessage = (error: string) => ({type: 'REGISTRATION/SET-ERROR', error} as const)*/
const setRegistrationStatus = (registration: boolean) => ({type: 'REGISTRATION/SET-STATUS', registration} as const);


export const postRegisterTC = (data: RegistrationDataType): AppThunkType => (dispatch) => {
    AuthAPI.registrationMe(data)
        .then(res => {
            console.log('Успех!!!');
            dispatch(setRegistrationStatus(true));
        })
        .catch(err => {
            console.log(err);
            dispatch(setErrorMessage(err.response.data.error));
        });
};