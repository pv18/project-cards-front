import React, {ChangeEvent, useEffect, useState} from 'react';

import {useNavigate} from 'react-router-dom';

import {useSelector} from 'react-redux';

import {AppDispatch, AppRootStateType} from '../../store/store';
import {deleteCardsPack, getPackListTC, postNewPackTC} from '../../store/reducers/tablePacksReducer';
import {PATH} from '../../app/Routing/Routing';

import {getLearnCardsPack} from '../../store/reducers/learnCardsReducer';
import {ModalDelete} from '../f11-packs-list/modals/deleteModal/ModalDelete';
import {Modal} from '../../components/c6-modal/Modal';

import {TablePacks} from './TablePacks';

export const TablePacksContainer = () => {

	const navigate = useNavigate();
	const dispatch = AppDispatch();

	const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);
	const currentPage = useSelector<AppRootStateType, number>(state => state.app.currentPage);
	const pageCount = useSelector<AppRootStateType, number>(state => state.app.pageCount);
	// для отрисовки моих или всех
	const isId = useSelector<AppRootStateType, boolean>(state => state.app.isId);
	const myId = useSelector<AppRootStateType, string>(state => state.profile.userData._id);
	const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);
	const min = useSelector<AppRootStateType, number>(state => state.tablePacks.params.showMinCard);
	const max = useSelector<AppRootStateType, number>(state => state.tablePacks.params.showMaxCard);

	const [namePack, setNamePack] = useState<string>('');
	const [sortPacks, setSortPacks] = useState<string>('0updated');

	// const isDelete = useSelector<AppRootStateType, boolean>(state => state.modals.modalDelete);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [titleCard, setTitleCard] = useState<string>('');
	const [titleCardID, setTitleCardID] = useState<string>('');


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
		const params = {pageCount: pageCount, page: currentPage, sortPacks, min, max, ...paramsId};
		if (isAuth) {
			dispatch(getPackListTC(params));
		}
	}, [isAuth, currentPage, pageCount, dispatch, isId, sortPacks, min, max]);

	// для удаления pack карточек
	const onClickDeletePack = (action?: 'delete') => {
		if (action === 'delete') dispatch(deleteCardsPack(titleCardID));
		setShowModal(false);
		setTitleCard('');
		setTitleCardID('');
	};

	// показать модалку удаления
	const showModalDelete = (id: string, titleCard: string) => {
		setTitleCard(titleCard);
		setTitleCardID(id);
		setShowModal(true);
	};

	// навигация на таблицу карточек
	const showCardsPack = (id: string, pageCount: number, name: string) => {
		(!isLoading) && navigate(`${PATH.PACK_NAME}/${name}/${id}/${pageCount}`);
	};

	const sortTableValue = (value: string) => {
		setSortPacks(0 + value);
	};

	const learnCardsPack = (id: string) => {
		dispatch(getLearnCardsPack(id));
		navigate(PATH.LEARN_CARDS);
	};

	return (
		<>
			<div>
				<input onChange={onChangePackName}
					   value={namePack}
					   disabled={isLoading}/>
				<button onClick={onHandlerSubmitPackName}
						disabled={isLoading}>
					add new pack
				</button>
			</div>
			<TablePacks
				sortTableValue={sortTableValue}
				showModalDelete={showModalDelete}
				showCardsPack={showCardsPack}
				learnCardsPack={learnCardsPack}
				isLoading={isLoading}
			/>
			<Modal visibility={showModal}>
			    <ModalDelete name={titleCard} onClickDeletePack={onClickDeletePack}/>
			</Modal>
		</>
	);
};