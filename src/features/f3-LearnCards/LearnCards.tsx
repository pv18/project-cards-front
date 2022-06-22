import React from 'react';

import {Button} from '../../app/components/Button/Button';

import s from './LearnCards.module.scss';

type LearnCardsType = {
	question: string
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

				<div className={s.cards__btnWrap}>
					<Button variant={'secondary'}>Cancel</Button>
					<Button>Show answer</Button>
				</div>

			</div>
		</div>
	);
};
