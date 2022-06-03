import {Dispatch} from 'redux';

import {ProfileAPI} from '../../api/api';
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

type ProfileStateType = {
    userData: UserDataType
    isFetching: boolean
}

const initialState: ProfileStateType = {
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

    isFetching: false,
};
export type ProfileActionType = ReturnType<typeof setProfile>
    | ReturnType<typeof putProfile>
    | ReturnType<typeof toggleFetching>

export const profileReducer = (state = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case 'PROFILE/SET-USER':
            return {
                ...state,
                userData: {...action.data},
            };
        case 'PROFILE/PUT-USER':
            return {
                ...state,
                userData: {
                    ...state.userData,
                    name: action.name,
                    avatar: action.avatar,
                },
            };
        case 'PROFILE/TOGGLE-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching,
            };
        default:
            return state;
    }
};
// AC создание action получения профиля
export const setProfile = (data: UserDataType) => ({type: 'PROFILE/SET-USER', data} as const);

// AC создание action редактирования профиля
export const putProfile = (name: string, avatar: string) => ({type: 'PROFILE/PUT-USER', name, avatar} as const);

// AC переключение состояния запроса (true - выполняется запрос на сервер)
export const toggleFetching = (isFetching: boolean) => ({type: 'PROFILE/TOGGLE-FETCHING', isFetching} as const);

// TC получение профиля
export const getUserProfile = () => (dispatch: Dispatch) => {
    ProfileAPI.getProfile()
        .then(resData => {
            dispatch(setProfile(resData));
            dispatch(setIsAuth(true));
        })
        .catch((error)=>{
            // alert(`Сервер вернул ошибку: "${error.response.data.error}"`);
        });
};
// TC редактирования профиля
export const putUserProfile = (name:string, avatar:string) => (dispatch: Dispatch) => {
    dispatch(toggleFetching(true));
    ProfileAPI.putProfile(name,avatar)
        .then(resData => {
            dispatch(putProfile(resData.name, resData.avatar));
            dispatch(toggleFetching(false));
        })
        .catch((error)=>{
            // alert(`Сервер вернул ошибку: "${error.response.data.error}"`);
            dispatch(toggleFetching(false));
        });
};
