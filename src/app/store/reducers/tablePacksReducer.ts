import {AppThunkType} from '../store';
import {ApiCards, GetParamsType} from '../../api/api';

import {setIsLoading} from './appReducer';

export type CardPacksType = {
	cardsCount: number
	created: string
	deckCover: string
	grade: number
	more_id: string
	name: string
	path: string
	private: boolean
	rating: number
	shots: number
	type: string
	updated: string
	user_id: string
	user_name: string
	__v: number
	_id: string
}

export type PackStateType = {
	cardPacks: Array<CardPacksType>
	cardPacksTotalCount: number
	maxCardsCount: number
	minCardsCount: number
	page: number
	pageCount: number
	token: string
	tokenDeathTime: number
}

export type PackListActionType = ReturnType<typeof setPackList>

const initialState: PackStateType = {
	cardPacks: [{
		cardsCount: 0,
		created: '2022-06-06T19:47:45.032Z',
		deckCover: 'url or base64',
		grade: 0,
		more_id: '62990963ddc3d312d8d3a864',
		name: 'NEW PACK NAME',
		path: '/def',
		private: false,
		rating: 0,
		shots: 0,
		type: 'pack',
		updated: '2022-06-06T19:47:49.718Z',
		user_id: '62990963ddc3d312d8d3a864',
		user_name: 'qwerty1044@mail.ru',
		__v: 0,
		_id: '629e59e17cbffe0004d99dd4',
	}],
	cardPacksTotalCount: 5087,
	maxCardsCount: 103,
	minCardsCount: 0,
	page: 1,
	pageCount: 10,
	token: '27777e20-e5d5-11ec-a71b-af6a6d5de3fe',
	tokenDeathTime: 1655151219458,
};

export const tablePacksReducer = (state = initialState, acton: PackListActionType): PackStateType => {
	switch (acton.type) {
		case 'PACK/SET-PACK_LIST': {
			return {
				...state,
				...acton.data,
			};
		}

		default: return state;
	}
};

// set PackList
export const setPackList = (data: PackStateType) => {
	return {
		type: 'PACK/SET-PACK_LIST',
		data,
	} as const;
};


// Thunk Creator

export const getPackListTC = (params?: GetParamsType): AppThunkType => (dispatch) => {
		dispatch(setIsLoading(true));
		ApiCards.getCards(params)
			.then(res => {
				dispatch(setPackList(res.data));
			})
			.catch(err => {
				// console.log(err);
			})
			.finally(() => {
				dispatch(setIsLoading(false));
			});
};

export const postNewPackTC = (name: string):AppThunkType => (dispatch) => {
	dispatch(setIsLoading(true));
	ApiCards.postCards({name})
		.then(res => {
			dispatch(getPackListTC({pageCount: 10, page: 1}));
		})
		.catch(err => {
			// console.log(err);
		})
		.finally(() => {
			dispatch(setIsLoading(false));
		});
};

export const deleteCardsPack = (id: string):AppThunkType => (dispatch) => {
	dispatch(setIsLoading(true));
	ApiCards.deletePack(id)
		.then(res => {
			dispatch(getPackListTC({pageCount: 10, page: 1}));
		})
		.finally(() => {
			dispatch(setIsLoading(true));
		});
};