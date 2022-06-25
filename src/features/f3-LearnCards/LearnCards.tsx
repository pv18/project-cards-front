import React from 'react';

import {Button} from '../../app/components/Button/Button';

import SuperCheckbox from '../../app/components/c3-SuperCheckbox/SuperCheckbox';

import s from './LearnCards.module.scss';

type LearnCardsType = {
	stateLearn: 'question' | 'answer'
	question: string
	answer: string
	onShowAnswer: () => void
	onNextQuestion: () => void
}


export const LearnCards = (props: LearnCardsType) => {


	return (
		<div className={s.page}>
			<div className={s.cards}>

				<h3>Learn “Pack Name”</h3>

				<div className={s.cards__question}>
					Question:
					<span>
						{/*“How "This" works in JavaScript?”*/}
						{props.question}
					</span>
				</div>

				{
					props.stateLearn === 'answer' &&
					<div className={s.cards__question}>
						Answer:
						<span>
						{/*“How "This" works in JavaScript?”*/}
							{props.answer}
						</span>
					</div>
				}

				{
					props.stateLearn === 'answer' &&
					<div className={s.cards__rate}>
						Rate yourself:
						<SuperCheckbox>
							Did not know	
						</SuperCheckbox>
						<SuperCheckbox>
							Forgot
						</SuperCheckbox>
						<SuperCheckbox>
							A lot of thought
						</SuperCheckbox>
						<SuperCheckbox>
							Сonfused
						</SuperCheckbox>
						<SuperCheckbox>
							Knew the answer
						</SuperCheckbox>
					</div>
				}

				<div className={s.cards__btnWrap}>
					<Button variant={'secondary'}>Cancel</Button>
					{
						props.stateLearn === 'question' ?
						<Button onClick={props.onShowAnswer}>
							Show answer
						</Button>
						: <Button onClick={props.onNextQuestion}>
								Next
						</Button>
					}
				</div>
			</div>
		</div>
	);
};
