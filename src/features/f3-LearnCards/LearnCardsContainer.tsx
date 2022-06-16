import React, {useState} from 'react';

import {useSelector} from 'react-redux';

import {CardPackNameType} from '../f2-PackName/api/bll/packNameReducer';

import {AppRootStateType} from '../../app/store/store';

import {LearnCards} from './LearnCards';

import {LearnCardsStateType} from './learnCardsReducer';

const getCard = (cards: CardPackNameType[]) => {
	const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
	const rand = Math.random() * sum;
	const res = cards.reduce((acc: { sum: number, id: number}, card, i) => {
			const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
			return {sum: newSum, id: newSum < rand ? i : acc.id};
		}
		, {sum: 0, id: -1});
	console.log('test: ', sum, rand, res);

	return cards[res.id + 1];
};

export const LearnCardsContainer = () => {


	// const [card, setCard] = useState<CardPackNameType>({
	// 	_id: 'fake',
	// 	cardsPack_id: '',
	//
	// 	answer: 'answer fake',
	// 	question: 'question fake',
	// 	grade: 0,
	// 	shots: 0,
	//
	// 	type: '',
	// 	rating: 0,
	// 	more_id: '',
	//
	// 	created: '',
	// 	updated: '',
	// });

	const data = useSelector<AppRootStateType, LearnCardsStateType>(state => state.learnCards);

	console.log(data);



	return (
		<>
			<LearnCards/>
		</>
	);
};
