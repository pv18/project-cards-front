import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';

import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {useDispatch} from 'react-redux';

import {LoginActionType, loginReducer} from './reducers/loginReducer';
import {ProfileActionType, profileReducer} from './reducers/profileReducer';
import {PasswordActionType, passwordReducer} from './reducers/passwordReducer';
import {RecoveryActionType, recoveryReducer} from './reducers/recoveryReducer';
import {RegistrationActionType, registrationReducer} from './reducers/registrationReducer';


export type AppRootStateType = ReturnType<typeof rootReducer>

// RootActionType
export type AppRootActionType = ProfileActionType
	| LoginActionType
	| PasswordActionType
	| RecoveryActionType
	| RegistrationActionType


export const AppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType,void,AnyAction>>();

// для типизации thunk
export type AppThunkType = ThunkAction<boolean, AppRootStateType, unknown, AnyAction>

const rootReducer = combineReducers({
	profile: profileReducer,
	login: loginReducer,
	password: passwordReducer,
	recovery: recoveryReducer,
	registration: registrationReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
