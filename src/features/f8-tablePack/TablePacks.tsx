import React, {useState} from 'react';

import {useSelector} from 'react-redux';

import {AppRootStateType} from '../../store/store';
import {CardPacksType} from '../../store/reducers/tablePacksReducer';

import Arrow from '../../assets/img/polygon.svg';

import s from './TablePacks.module.scss';

type TablePacksPropsType = {
	showModalDelete: (id: string, name: string) => void
	showCardsPack: (id: string, pageCount: number, name: string) => void
	sortTableValue: (value: string) => void
	learnCardsPack: (id: string) => void
}


export const TablePacks = (props: TablePacksPropsType) => {

	const {showCardsPack, sortTableValue, learnCardsPack, showModalDelete} = props;

	const cardPacks = useSelector<AppRootStateType, Array<CardPacksType>>(state => state.tablePacks.cardPacks);
	const userId = useSelector<AppRootStateType, string>(state => state.profile.userData._id);

	const [sortName, setSortName] = useState<string>('updated');

	const onClickSort = (name: string) => {
		setSortName(name);
		sortTableValue(name);
	};

	// открываем модалку для удаления
	const showModalDeleteHandler = (id: string, name: string) => {
		showModalDelete(id, name)
	}

	// отрисовываем Pack в таблице
	const renderCardsPacks = () => {
		return cardPacks.map(el => {
			return (
				<tr key={el._id} className={s.table__wrap}>
					<th onClick={() => showCardsPack(el._id, el.cardsCount, el.name)}>{el.name}</th>
					<th>{el.cardsCount}</th>
					<th>{new Date(Date.parse(el.updated)).toLocaleDateString()}</th>
					<th>{el.user_name}</th>
					<th className={s.table__wrapBtn}>
						{el.user_id === userId &&
							<span>
								<button
									className={`${s.table__btn} ${s.table__btn_delete}`}
									onClick={() => showModalDeleteHandler(el._id, el.name)}>
										Delete
								</button>
								<button className={s.table__btn}>Edit</button>
							</span>
						}
						<button onClick={() => learnCardsPack(el._id)} className={s.table__btn}>Learn</button>
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
					<th onClick={() => onClickSort('name')}
					>
						Name
						{sortName === 'name' && <img src={Arrow} alt='Arrow'/>}
					</th>
					<th
						onClick={() => onClickSort('cardsCount')}
					>
						Cards
						{sortName === 'cardsCount' && <img src={Arrow} alt='Arrow'/>}
					</th>
					<th
						onClick={() => onClickSort('updated')}
					>
						Last Updated
						{sortName === 'updated' && <img src={Arrow} alt='Arrow'/>}
					</th>
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

