import {ProfileAPI} from "../../components/profile/api/api";
import {Dispatch} from "redux";

type ProfileStateType = {
    name: string
    email: string
    avatar?: string
    isFetching: boolean,
}

type SetActionType = {
    type: 'SET_USER_PROFILE',
    name: string,
    email: string,
}
type PutActionType = {
    type: 'PUT_USER_PROFILE',
    name: string,
    avatar: string,
}
type ToggleFetchingActionType = {
    type: 'TOGGLE_FETCHING',
    isFetching: boolean,
}

const initialState: ProfileStateType = {
    name: '',
    email: '',
    avatar:'',
    isFetching: false,
};
export type ProfileActionType = SetActionType | PutActionType | ToggleFetchingActionType

export const profileReducer = (state = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case 'SET_USER_PROFILE':
            return {
                ...state,
                name: action.name,
                email: action.email,
            }
        case 'PUT_USER_PROFILE':
            return {
                ...state,
                name: action.name,
                avatar: action.avatar,
            }
        case "TOGGLE_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
};
// AC создание action получения профиля
export const setProfile = (name: string, email: string):SetActionType => ({type: 'SET_USER_PROFILE', name, email})

// AC создание action редактирования профиля
export const putProfile = (name: string, avatar: string):PutActionType => ({type: 'PUT_USER_PROFILE', name, avatar})

// AC переключение состояния запроса (true - выполняется запрос на сервер)
export const toggleFetching = (isFetching: boolean):ToggleFetchingActionType => ({type: 'TOGGLE_FETCHING', isFetching})

// TC получение профиля
export const getUserProfile = () => (dispatch: Dispatch) => {
    ProfileAPI.getProfile()
        .then(resData => {
            dispatch(setProfile(resData.name, resData.email))
        })
        .catch((error)=>{
            alert(`Сервер вернул ошибку: "${error.response.data.error}"`)
        })
}
// TC редактирования профиля
export const putUserProfile = (name:string, avatar:string) => (dispatch: Dispatch) => {
    dispatch(toggleFetching(true))
    ProfileAPI.putProfile(name,avatar)
        .then(resData => {
            dispatch(putProfile(resData.name, resData.avatar))
            dispatch(toggleFetching(false))
        })
        .catch((error)=>{
            alert(`Сервер вернул ошибку: "${error.response.data.error}"`)
            dispatch(toggleFetching(false))
        })
}
