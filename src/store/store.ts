import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';

import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';

import {packNameReducer} from '../features/f2-packName/api/bll/packNameReducer';

import {learnCardsReducer} from '../features/f3-learnCards/learnCardsReducer';

import {ProfileActionType, profileReducer} from './reducers/profileReducer';
import {AppActionsType, appReducer} from './reducers/appReducer';

import {PackListActionType, tablePacksReducer} from './reducers/tablePacksReducer';
import {authReducer} from './reducers/authReducer';
import {modalsReducer} from './reducers/modalsReducer';


export type AppRootStateType = ReturnType<typeof rootReducer>

// RootActionType
export type AppRootActionType = ProfileActionType
    | AppActionsType
    | PackListActionType


export const AppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType, void, AnyAction>>();

// для типизации thunk
export type AppThunkType = ThunkAction<void, AppRootStateType, unknown, AnyAction>

const rootReducer = combineReducers({
    profile: profileReducer,
    auth: authReducer,
    app: appReducer,
    packName: packNameReducer,
    tablePacks: tablePacksReducer,
    modals: modalsReducer,
	learnCards: learnCardsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

//@ts-ignore
window.store = store;
