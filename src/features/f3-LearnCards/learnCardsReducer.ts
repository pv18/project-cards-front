import {AppThunkType} from '../../app/store/store';
import {apiCard} from '../f2-PackName/api/api';
import {setIsLoading} from '../../app/store/reducers/appReducer';

export type LearnCardsStateType = {
	cards: [
		{
			answer: string
			question: string
			cardsPack_id: string
			grade: number
			shots: number
			user_id: string
			created: string
			updated: string
			_id: string
		},
	],
	cardsTotalCount: number
	maxGrade: number
	minGrade: number
	page: number
	pageCount: number
	packUserId: string
}

export type LearnCardsActionType = ReturnType<typeof setCards>

const initialState: LearnCardsStateType = {
	cards: [
		{
			answer: 'no answer',
			question: 'no question',
			cardsPack_id: '5eb6a2f72f849402d46c6ac4',
			grade: 4.987525071790364,
			shots: 1,
			user_id: '142151531535151',
			created: '2020-05-13T11:05:44.867Z',
			updated: '2020-05-13T11:05:44.867Z',
			_id: '5ebbd48876810f1ad0e7ece3',
		},
		
	],
	cardsTotalCount: 3,
	maxGrade: 4.987525071790364,
	minGrade: 2.0100984354076568,
	page: 1,
	pageCount: 4,
	packUserId: '5eecf82a3ed8f700042f1186',
};

export const learnCardsReducer = (state= initialState, action: LearnCardsActionType) => {
	switch (action.type) {
		case 'LEARN/SET-CARDS': {
			return {
				...state,
			};
		}
		default: return state;
	}
};




export const setCards = (data: LearnCardsStateType) => {
	return {
		type: 'LEARN/SET-CARDS',
		data,
	} as const;
};

export const getLearnCardsPack = (id: string):AppThunkType => (dispatch) => {
	dispatch(setIsLoading(true));
	apiCard.getCards({cardsPack_id: id})
		.then(res => {
			dispatch(setCards(res.data));
		})
		.finally(() => {
			dispatch(setIsLoading(false));
		});
};