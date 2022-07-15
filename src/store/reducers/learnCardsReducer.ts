import {AppThunkType} from '../store';
import {apiCard} from '../../features/f2-packName/api/api';

import {ApiCards} from '../../api/api';

import {setIsLoading} from './appReducer';

export type LearnCardType = {
	answer: string
	answerImg: string
	answerVideo: string
	cardsPack_id: string
	comments: string
	created: string
	grade: number
	more_id: string
	question: string
	questionImg: string
	questionVideo: string
	rating: number
	shots: number
	type: string
	updated: string
	user_id: string
	__v: number
	_id: string
}

export type LearnCardsStateType = {
	cards: Array<LearnCardType>,
	cardsTotalCount: number
	maxGrade: number
	minGrade: number
	page: number
	pageCount: number
	packUserId: string
}

export type LearnCardsActionType = ReturnType<typeof setCards>
	| ReturnType<typeof setGradeCard>

const initialState: LearnCardsStateType = {
	cards: [
		{
			answer: '1',
			answerImg: '',
			answerVideo: '',
			cardsPack_id: '622b52e929bee9000469654f',
			comments: '',
			created: '2022-06-23T15:34:53.466Z',
			grade: 0,
			more_id: '62242f0a6af372000457ad68',
			question: '1',
			questionImg: '',
			questionVideo: '',
			rating: 0,
			shots: 0,
			type: 'card',
			updated: '2022-06-23T15:34:53.466Z',
			user_id: '62242f0a6af372000457ad68',
			__v: 0,
			_id: '62b4881d022e2300041d17ac',
		},

	],
	cardsTotalCount: 3,
	maxGrade: 4.987525071790364,
	minGrade: 2.0100984354076568,
	page: 1,
	pageCount: 4,
	packUserId: '5eecf82a3ed8f700042f1186',
};

export const learnCardsReducer = (state = initialState, action: LearnCardsActionType): LearnCardsStateType => {
	switch (action.type) {
		case 'LEARN/SET-CARDS': {
			return {
				...state,
				...action.data,
			};
		}
		case 'LEARN/SET-GRADE': {
			return {
				...state,
				cards: state.cards.map(el => {
					if (el._id === action.card_id) {
						return {...el, grade: action.grade};
					} else {
						return el;
					}
				}),
			};
		}

		default:
			return state;
	}
};


export const setCards = (data: LearnCardsStateType) => {
	return {
		type: 'LEARN/SET-CARDS',
		data,
	} as const;
};

export const setGradeCard = (card_id: string, grade: number) => {
	return {
		type: 'LEARN/SET-GRADE',
		card_id,
		grade,
	} as const;
};

export const getLearnCardsPack = (id: string): AppThunkType => (dispatch) => {
	dispatch(setIsLoading(true));
	apiCard.getCards({cardsPack_id: id, pageCount: 112})
	.then(res => {
		dispatch(setCards(res.data));
	})
	.finally(() => {
		dispatch(setIsLoading(false));
	});
};


export const putRatingCard = (rating: number, card_id: string): AppThunkType => (dispatch) => {
	dispatch(setIsLoading(true));
	ApiCards.sendRate(rating, card_id)
	.then(data => {
		dispatch(setGradeCard(data.updatedGrade.card_id, data.updatedGrade.grade));
	})
		.catch(err=>{

		})
		.finally(()=>{
			dispatch(setIsLoading(false));
		});
};