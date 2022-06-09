import React, {ChangeEvent, useEffect, useState} from 'react';

import {useNavigate} from 'react-router-dom';

import {useSelector} from 'react-redux';

import {AppDispatch, AppRootStateType} from '../../store/store';
import {deleteCardsPack, getPackListTC, postNewPackTC} from '../../store/reducers/tablePacksReducer';
import {PATH} from '../Routing/Routing';

import {TablePacks} from './TablePacks';

type TablePropsType = {
	id?: string
}

export const TablePacksContainer = (props: TablePropsType) => {

	const navigate = useNavigate();
	const dispatch = AppDispatch();

	const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);
	const currentPage = useSelector<AppRootStateType, number>(state => state.app.currentPage);
	const pageCount = useSelector<AppRootStateType, number>(state => state.app.pageCount);


	const [namePack, setNamePack] = useState<string>('');

	// read input value
	const onChangePackName = (e: ChangeEvent<HTMLInputElement>) => {
		setNamePack(e.currentTarget.value);
	};

	// для добавления карточек Pack
	const onHandlerSubmitPackName = () => {
		if (namePack) {
			dispatch(postNewPackTC(namePack));
		}
	};

	useEffect(() => {
		const params = {pageCount: pageCount, page: currentPage, user_id: props.id };
		if (isAuth) {
			dispatch(getPackListTC(params));
		}
	}, [isAuth, currentPage, pageCount,dispatch, props.id]);

	// для удаления pack карточек
	const onClickDeletePack = (id: string) => {
		dispatch(deleteCardsPack(id));
	};

	// навигация на таблицу карточек
	const showCardsPack = (id: string, pageCount: number, name: string) => {
		navigate(`${PATH.PACK_NAME}/${name}/${id}/${pageCount}`);
	};
	
	return (
		<>
			<div>
				<input onChange={onChangePackName} value={namePack}/>
				<button onClick={onHandlerSubmitPackName}>
					add new pack
				</button>
			</div>
			<TablePacks
				onClickDeletePack={onClickDeletePack}
				showCardsPack={showCardsPack}
			/>
		</>
	);
};

