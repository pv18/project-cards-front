import React, {ChangeEvent, useEffect, useState} from 'react';

import {useNavigate} from 'react-router-dom';

import {useSelector} from 'react-redux';

import {AppDispatch, AppRootStateType} from '../../store/store';
import {deleteCardsPack, getPackListTC, postNewPackTC} from '../../store/reducers/tablePacksReducer';
import {PATH} from '../Routing/Routing';

import {TablePacks} from './TablePacks';
import {changeModalDelete} from '../../store/reducers/modalsReducer';
import {ModalDelete} from '../packs-list/modals/deleteModal/ModalDelete';
import {Modal} from '../Modal/Modal';

export const TablePacksContainer = () => {

	const navigate = useNavigate();
	const dispatch = AppDispatch();

	const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);
	const currentPage = useSelector<AppRootStateType, number>(state => state.app.currentPage);
	const pageCount = useSelector<AppRootStateType, number>(state => state.app.pageCount);
	// для отрисовки моих или всех
	const isId = useSelector<AppRootStateType, boolean>(state => state.app.isId);
	const myId = useSelector<AppRootStateType, string>(state => state.profile.userData._id);

	const [namePack, setNamePack] = useState<string>('');
	const [sortPacks, setSortPacks] = useState<string>('0updated');

	// const isDelete = useSelector<AppRootStateType, boolean>(state => state.modals.modalDelete);
	const [showModal, setShowModal] = useState<boolean>(false)
	const [titleCard, setTitleCard] = useState<string>('')
	const [titleCardID, setTitleCardID] = useState<string>('')


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
		const paramsId = isId ? {user_id: myId} : {};
		const params = {pageCount: pageCount, page: currentPage, sortPacks, ...paramsId};
		if (isAuth) {
			dispatch(getPackListTC(params));
		}
	}, [isAuth, currentPage, pageCount, dispatch, isId, sortPacks]);

	// для удаления pack карточек
	const onClickDeletePack = (action?: 'delete') => {
		if (action === 'delete') dispatch(deleteCardsPack(titleCardID))
		setShowModal(false)
		setTitleCard('')
		setTitleCardID('')
	};

	// показать модалку удаления
	const showModalDelete = (id: string, titleCard: string) => {
		setTitleCard(titleCard)
		setTitleCardID(id)
		setShowModal(true)
	};

	// навигация на таблицу карточек
	const showCardsPack = (id: string, pageCount: number, name: string) => {
		navigate(`${PATH.PACK_NAME}/${name}/${id}/${pageCount}`);
	};

	const sortTableValue = (value: string) => {
		setSortPacks(0 + value);
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
				sortTableValue={sortTableValue}
				showModalDelete={showModalDelete}
				showCardsPack={showCardsPack}
			/>
			<Modal visibility={showModal}>
			    <ModalDelete name={titleCard} onClickDeletePack={onClickDeletePack}/>
			</Modal>
		</>
	);
};