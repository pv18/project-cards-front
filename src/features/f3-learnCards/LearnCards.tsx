import React, {useState} from 'react';

import {Button} from '../../components/c5-Button/Button';

import {SuperRadio} from '../../components/c7-SuperRadio/SuperRadio';

import s from './LearnCards.module.scss';

type LearnCardsType = {
	name: string | undefined
	stateLearn: 'question' | 'answer'
	question: string
	answer: string
	onShowAnswer: () => void
	onNextQuestion: (rating: number) => void
	onCancel: () => void
}


export const LearnCards = (props: LearnCardsType) => {

	const rate = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer'];

	const [yourself, setYourself] = useState<string>(rate[0]);
	const [rating, setRatingId] = useState<number>(1);
	
	const handleChangeRadio = (options: string, rating: number) => {
		setYourself(options);
		setRatingId(rating + 1);
	};
	
	const onClickNextAsk = () => {
		props.onNextQuestion(rating);
		setYourself(rate[0]);
		setRatingId(1);
	};


	return (
		<div className={s.page}>
			<div className={s.cards}>

				<div className={s.cards__title}>
					<h3>Learn: “{props.name}”</h3>
				</div>

				<div className={s.cards__question}>
					Question:
					<span>
						{props.question}
					</span>
				</div>

				{
					props.stateLearn === 'answer' &&
					<div className={s.cards__question}>
						Answer:
						<span>
							{props.answer}
						</span>
					</div>
				}

				{
					props.stateLearn === 'answer' &&
					<div className={s.cards__rate}>
						<h4>Rate yourself:</h4>

						<SuperRadio
							name={'radio'}
							options={rate}
							value={yourself}
							onChangeOption={handleChangeRadio}
						/>
					</div>
				}

				<div className={s.cards__btnWrap}>
					<Button
						variant={'secondary'}
						onClick={props.onCancel}>
							Cancel
					</Button>
					{
						props.stateLearn === 'question' ?
							<Button onClick={props.onShowAnswer}>
								Show answer
							</Button>
							: <Button onClick={onClickNextAsk}>
								Next
							</Button>
					}
				</div>
			</div>
		</div>
	);
};
