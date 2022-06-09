import React from 'react';

import {useSelector} from 'react-redux';

import {AppRootStateType} from '../../store/store';
import {CardPacksType} from '../../store/reducers/tablePacksReducer';

import s from './TablePacks.module.scss';

type TablePacksPropsType = {
	onClickDeletePack: (id: string) => void
	showCardsPack: (id: string, pageCount: number) => void
}


export const TablePacks = (props: TablePacksPropsType) => {

	const {onClickDeletePack, showCardsPack} = props;

	const cardPacks = useSelector<AppRootStateType, Array<CardPacksType>>(state => state.tablePacks.cardPacks);
	const userId = useSelector<AppRootStateType, any>(state => state.profile.userData._id);

	// отрисовываем Pack в таблице
	const renderCardsPacks = () => {
		return cardPacks.map(el => {
			return (
				<tr key={el._id} className={s.table__wrap}>
					<th onClick={() => showCardsPack(el._id, el.cardsCount)}>{el.name}</th>
					<th>{el.cardsCount}</th>
					<th>18.03.2021-date</th>
					<th>{el.user_name}</th>
					<th>
						{el.user_id === userId &&
							<>
								<button onClick={() => onClickDeletePack(el._id)}>Delete</button>
								<button>Edit</button>
							</>
						}
						<button>Learn</button>
					</th>
				</tr>
			);
		});
	};

	return (
		<div className={s.tablePacks}>
			<table className={s.table}>
				<thead className={s.table__head}>
				<tr className={s.table__wrap}>
					<th>Name</th>
					<th>Cards</th>
					<th>Last Updated</th>
					<th>Created by</th>
					<th>Actions</th>
				</tr>
				</thead>
				<tbody className={s.table__body}>
					{renderCardsPacks()}
				</tbody>
			</table>
		</div>
	);
};

