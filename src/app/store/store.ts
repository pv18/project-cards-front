import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';

import {LoginActionType, loginReducer} from './reducers/loginReducer';
import {ProfileActionType, profileReducer} from './reducers/profileReducer';
import {PasswordActionType, passwordReducer} from './reducers/passwordReducer';
import {RecoveryActionType, recoveryReducer} from './reducers/recoveryReducer';
import {RegistrationActionsType, registrationReducer} from './reducers/registrationReducer';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';


export type AppRootStateType = ReturnType<typeof rootReducer>
export const AppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType,void,AnyAction>>()

// RootActionType
export type AppRootActionType = ProfileActionType
	| LoginActionType
	| PasswordActionType
	| RecoveryActionType
	| RegistrationActionsType


const rootReducer = combineReducers({
	profile: profileReducer,
	login: loginReducer,
	password: passwordReducer,
	recovery: recoveryReducer,
	registration: registrationReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

//@ts-ignore
window.store = store;
