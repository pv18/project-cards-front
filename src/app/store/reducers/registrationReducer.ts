import {Dispatch} from 'redux';
import {AuthAPI, RegistrationDataType} from '../../api/api';

type RegistrationStateType = {
    error?: string
    registration: boolean
}

export type RegistrationActionsType =
    ReturnType<typeof setErrorMessage> |
    ReturnType<typeof setRegistrationStatus>

const initialState: RegistrationStateType = {
    error: '',
    registration: false
};

export const registrationReducer = (state = initialState, action: RegistrationActionsType) => {
    switch (action.type) {
        case 'REGISTRATION/SET-ERROR':
            return {
                ...state,
                error: action.error
            }
        case 'REGISTRATION/SET-STATUS':
            return {
                ...state,
                registration: action.registration
            }
        default:
            return state;
    }
};

const setErrorMessage = (error: string) => ({type: 'REGISTRATION/SET-ERROR', error} as const)
const setRegistrationStatus = (registration: boolean) => ({type: 'REGISTRATION/SET-STATUS', registration} as const)


export const postRegisterTC = (data: RegistrationDataType) => (dispatch: Dispatch<RegistrationActionsType>) => {
    AuthAPI.registrationMe(data)
        .then(res => {
            console.log('Успех!!!')
            dispatch(setRegistrationStatus(true))
        })
        .catch(err => {
            console.log(err)
            dispatch(setErrorMessage(err.response.data.error))
        })
}