import {AuthAPI, LoginDataType, RegistrationDataType} from '../../api/api';
import {AppThunkType} from '../store';

import {setProfile} from './profileReducer';
import {setIsAuth, setIsLoading} from './appReducer';

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
    recoveryEmail: string,
    info: string,
}

export type AuthActionsType = ReturnType<typeof setDataLoginAC>
    | ReturnType<typeof setErrorMessage>
    | ReturnType<typeof isToggleLoginBtn>
    | ReturnType<typeof recoveryPassword>
    /*   | ReturnType<typeof logOut>*/
    | ReturnType<typeof setRegistrationStatus>

const initialState: AuthStateType = {
    userData: {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0, // количество колод
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
    recoveryEmail: '',
    info: '',
};

export const authReducer = (state = initialState, action: AuthActionsType) => {

    switch (action.type) {
        case 'AUTH/SET-DATA': {
            return {
                ...state,
                ...state.userData,
                userData: action.data,
            };
        }
        case 'AUTH/IS-TOGGLE-ACTIVE-BTN': {
            return {
                ...state,
                activeLoginBtn: action.isToggle,
            };
        }
        case 'AUTH/RECOVERY-PASSWORD': {
            return {
                ...state,
                recoveryEmail: action.email,
            };
        }
        /*        case 'AUTH/LOG-OUT': {
                    return {
                        ...state,
        /!*                ...state.userData, email: '',*!/
                    };
                }*/
        case 'AUTH/SET-STATUS': {
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
        type: 'AUTH/SET-DATA',
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
        type: 'AUTH/IS-TOGGLE-ACTIVE-BTN',
        isToggle,
    } as const;
};


/*const logOut = () => {
    return {
        type: 'AUTH/LOG-OUT',
    } as const;
};*/

//
const recoveryPassword = (recoverySuccess: boolean, email: string) => {
    return {
        type: 'AUTH/RECOVERY-PASSWORD',
        recoverySuccess,
        email,
    } as const;
};
// thunk creator

export const setDataLoginTC = (data: LoginDataType): AppThunkType => (dispatch) => {
    //dispatch(isToggleLoginBtn(true));
    dispatch(setIsLoading(true));
    AuthAPI.loginMe(data)
        .then(res => {
            dispatch(setDataLoginAC(res.data));
            dispatch(setProfile(res.data));
            dispatch(setIsAuth(true));
        })
        .catch(error => {
            if (error.response.data.isEmailValid) {
                dispatch(setErrorMessage('Email is not valid.'));
            } else if (error.response.data.isPassValid) {
                dispatch(setErrorMessage('Password is not valid.'));
            } else {
                dispatch(setErrorMessage('Some error has occurred.'));
            }
        })
        .finally(() => {
            // dispatch(isToggleLoginBtn(false));
            dispatch(setIsLoading(false));
        });
};

export const setLogOut = (): AppThunkType => (dispatch) => {
    dispatch(setIsLoading(true));
    AuthAPI.logOut()
        .then(resData => {
            dispatch(setIsAuth(false));
        })
        .catch(error => {
            dispatch(setErrorMessage(error.response.data.error));
        })
        .finally(() => {
            dispatch(setIsLoading(false));
        });
};

// ТС для страницы восстановления пароля
export const recoveryPass = (email: string): AppThunkType => (dispatch) => {
    dispatch(setErrorMessage(''));
    dispatch(setIsLoading(true));
    AuthAPI.recoveryPass(email)
        .then(resData => {
            if (resData.info.length) {
                dispatch(recoveryPassword(true, email));
            }
        })
        .catch(err => {
            dispatch(setErrorMessage(err.response.data.error));
        })
        .finally(() => {
            dispatch(setIsLoading(false));
        });
};


// АС для страницы регистрации
const setRegistrationStatus = (registration: boolean) => ({type: 'AUTH/SET-STATUS', registration} as const);

// ТС для страницы регистрации
export const postRegisterTC = (data: RegistrationDataType): AppThunkType => (dispatch) => {
    dispatch(setIsLoading(true));
    AuthAPI.registrationMe(data)
        .then(res => {
            dispatch(setRegistrationStatus(true));
        })
        .catch(err => {
            dispatch(setErrorMessage(err.response.data.error));
        })
        .finally(() => {
            dispatch(setIsLoading(false));
        });
};

// АС для нового пароля ()
const newPassword = (info: string) => ({
    type: 'AUTH/NEW-PASSWORD',
    info,
} as const);

export const createNewPassword = (password: string, resetPasswordToken: string | undefined): AppThunkType => (dispatch) => {
    dispatch(setErrorMessage(''));
    dispatch(setIsLoading(true));
    AuthAPI.newPass(password, resetPasswordToken)
        .then(resData => {
            if (resData.info.length) {
                dispatch(setIsAuth(false));
                dispatch(newPassword(resData.info));
            }
        })
        .catch(err => {
            dispatch(setErrorMessage(err.response.data.error));
        })
        .finally(() => {
            dispatch(setIsLoading(false));
        });
};

