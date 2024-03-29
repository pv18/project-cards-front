import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';

import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';

import {PackNameActionType, packNameReducer} from './reducers/packNameReducer';

import {learnCardsReducer} from './reducers/learnCardsReducer';

import {ProfileActionType, profileReducer} from './reducers/profileReducer';
import {AppActionsType, appReducer} from './reducers/appReducer';

import {PackListActionType, tablePacksReducer} from './reducers/tablePacksReducer';
import {authReducer} from './reducers/authReducer';
import {modalsReducer} from './reducers/modalsReducer';
import {packListReducer} from '../features/f1-packsList/api/n0-bll/packListReducer';


export type AppRootStateType = ReturnType<typeof rootReducer>

// RootActionType
export type AppRootActionType = ProfileActionType
    | AppActionsType
    | PackListActionType
    | PackNameActionType


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
    packList: packListReducer,

});

export const store = createStore(rootReducer, applyMiddleware(thunk));

//@ts-ignore
window.store = store;
