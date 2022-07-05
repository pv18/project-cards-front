import {AppThunkType} from '../../store/store';
import {apiCard} from '../f2-packName/api/api';
import {setIsLoading} from '../../store/reducers/appReducer';

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

export const learnCardsReducer = (state= initialState, action: LearnCardsActionType) => {
	switch (action.type) {
		case 'LEARN/SET-CARDS': {
			return {
				...state,
				...action.data,
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
	apiCard.getCards({cardsPack_id: id, pageCount: 112})
		.then(res => {
			dispatch(setCards(res.data));
		})
		.finally(() => {
			dispatch(setIsLoading(false));
		});
};