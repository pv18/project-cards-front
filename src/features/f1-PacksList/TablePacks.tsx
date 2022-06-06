import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {Dispatch} from 'redux';

import {AppRootStateType} from '../../app/store/store';

import s from './TablePacks.module.scss';
import {apiCards} from './api/api';

import {CardPacksType, PackListActionType, setPackList} from './api/n0-bll/packListReducer';

export const TablePacks = () => {
	
	const dispatch = useDispatch<Dispatch<PackListActionType>>();
	
	const cardPacks = useSelector<AppRootStateType, Array<CardPacksType>>(state => state.packList.cardPacks);


	useEffect(() => {
		apiCards.getCards()
			.then(res => {
				console.log(res.data);
				dispatch(setPackList(res.data));
			})
			.catch(err => {
				console.log(err);
			});
	},[]);
	
	const renderCardsPacks = ():any => {
		console.log(cardPacks);
		return cardPacks.map(el => {
			return (
				<tr key={el._id} className={s.table__wrap}>
					<th>{el.name}</th>
					<th>{el.cardsCount}</th>
					<th>18.03.2021-date</th>
					<th>{el.user_name}</th>
					<th>
						<button>Delete</button>
						<button>Edit</button>
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
					{/*<tr className={s.table__wrap}>*/}
					{/*	<th>Pack Name</th>*/}
					{/*	<th>4</th>*/}
					{/*	<th>18.03.2021</th>*/}
					{/*	<th>Ivan Ivanov</th>*/}
					{/*	<th>*/}
					{/*		<button>Delete</button>*/}
					{/*		<button>Edit</button>*/}
					{/*		<button>Learn</button>*/}
					{/*	</th>*/}
					{/*</tr>*/}
					{renderCardsPacks()}
				</tbody>
			</table>
		</div>
	);
};

