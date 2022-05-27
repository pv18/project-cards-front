import {applyMiddleware, combineReducers, createStore} from 'redux';

import {LoginActionType, loginReducer} from './reducers/loginReducer';
import {ProfileActionType, profileReducer} from './reducers/profileReducer';
import {PasswordActionType, passwordReducer} from './reducers/passwordReducer';
import {RecoveryActionType, recoveryReducer} from './reducers/recoveryReducer';
import {RegistrationActionType, registrationReducer} from './reducers/registrationReducer';
import thunk from 'redux-thunk';


export type AppRootStateType = ReturnType<typeof rootReducer>

// RootActionType
export type AppRootActionType = ProfileActionType
	| LoginActionType
	| PasswordActionType
	| RecoveryActionType
	| RegistrationActionType


const rootReducer = combineReducers({
	profile: profileReducer,
	login: loginReducer,
	password: passwordReducer,
	recovery: recoveryReducer,
	registration: registrationReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
