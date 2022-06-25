import React, {useState} from 'react';

import {useSelector} from 'react-redux';

import {Navigate, useNavigate} from 'react-router-dom';

import {CardPackNameType} from '../f2-PackName/api/bll/packNameReducer';

import {AppRootStateType} from '../../app/store/store';

import {PATH} from '../../app/components/Routing/Routing';

import {LearnCards} from './LearnCards';

import {LearnCardsStateType} from './learnCardsReducer';

// const getCard = (cards: CardPackNameType[]) => {
// 	const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
// 	const rand = Math.random() * sum;
// 	const res = cards.reduce((acc: { sum: number, id: number}, card, i) => {
// 			const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
// 			return {sum: newSum, id: newSum < rand ? i : acc.id};
// 		}
// 		, {sum: 0, id: -1});
// 	console.log('test: ', sum, rand, res);
//
// 	return cards[res.id + 1];
// };

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

	const navigate = useNavigate();

	const [stateLearn, setStateLearn] = useState<'question' | 'answer'>('question');
	const [currentQuestion, setCurrentQuestion] = useState<number>(0);

	const data = useSelector<AppRootStateType, LearnCardsStateType>(state => state.learnCards);

	const onShowAnswer = () => {
		setStateLearn('answer');
	};

	const onNextQuestion = () => {
		if (data.cardsTotalCount === currentQuestion + 1) {
			setCurrentQuestion(0);
		} else {
			setCurrentQuestion(currentQuestion + 1);
		}
		setStateLearn('question');
	};
	
	const onCancel = () => {
		navigate(PATH.PACKS_LIST);
	};



	return (
		<>
			<LearnCards
				stateLearn={stateLearn}
				question={data.cards[currentQuestion].question}
				answer={data.cards[currentQuestion].answer}
				onShowAnswer={onShowAnswer}
				onNextQuestion={onNextQuestion}
				onCancel={onCancel}
			/>

		</>
	);
};
