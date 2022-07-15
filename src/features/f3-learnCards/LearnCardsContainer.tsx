import React, {useEffect, useState} from 'react';

import {useSelector} from 'react-redux';

import {useNavigate, useParams} from 'react-router-dom';

import {AppDispatch, AppRootStateType} from '../../store/store';

import {PATH} from '../../app/Routing/Routing';

import {LearnCardsStateType, LearnCardType, putRatingCard} from '../../store/reducers/learnCardsReducer';

import {LearnCards} from './LearnCards';


const getCard = (cards: LearnCardType[]) => {
	const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
	const rand = Math.random() * sum;
	const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
			const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
			return {sum: newSum, id: newSum < rand ? i : acc.id};
		}
		, {sum: 0, id: -1});
	// console.log('test: ', sum, rand, res);

	return cards[res.id + 1];
};

export const LearnCardsContainer = () => {

	const dispatch = AppDispatch();

	const {name} = useParams();


	const [card, setCard] = useState<LearnCardType>({
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
	});

	const navigate = useNavigate();

	const [stateLearn, setStateLearn] = useState<'question' | 'answer'>('question');
	// const [currentQuestion, setCurrentQuestion] = useState<number>(0);

	const stateCards = useSelector<AppRootStateType, Array<LearnCardType>>(state => state.learnCards.cards);

	const onShowAnswer = () => {
		setStateLearn('answer');
	};

	const onNextQuestion = (rating: number) => {

		dispatch(putRatingCard(rating, card._id));

		setCard(getCard(stateCards));
		setStateLearn('question');
	};

	const onCancel = () => {
		navigate(PATH.PACKS_LIST);
	};

	useEffect(() => {
		setCard(getCard(stateCards));
	},[stateCards]);


	return (
		<>
			<LearnCards
				name={name}
				stateLearn={stateLearn}
				question={card.question}
				answer={card.answer}
				onShowAnswer={onShowAnswer}
				onNextQuestion={onNextQuestion}
				onCancel={onCancel}
			/>

		</>
	);
};
