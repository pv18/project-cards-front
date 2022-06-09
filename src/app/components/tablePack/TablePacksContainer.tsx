import React, {useEffect} from 'react';

import {useNavigate} from 'react-router-dom';

import {useSelector} from 'react-redux';

import {AppDispatch, AppRootStateType} from '../../store/store';
import {deleteCardsPack, getPackListTC, postNewPackTC} from '../../store/reducers/tablePacksReducer';
import {PATH} from '../Routing/Routing';

import {TablePacks} from './TablePacks';

export const TablePacksContainer = () => {

	const navigate = useNavigate();
	const dispatch = AppDispatch();

	const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);

	// const [namePack, setNamePack] = useState<string>('');

	// read input value
	// const onChangePackName = (e: ChangeEvent<HTMLInputElement>) => {
	// 	setNamePack(e.currentTarget.value);
	// };

	// для добавления карточек Pack
	const onHandlerSubmitPackName = () => {
		dispatch(postNewPackTC('Name pack Hello'));
	};

	useEffect(() => {
		const params = {pageCount: 10, page: 1};
		if (isAuth) {
			dispatch(getPackListTC(params));
		}
	}, [isAuth, dispatch]);

	// для удаления pack карточек
	const onClickDeletePack = (id: string) => {
		dispatch(deleteCardsPack(id));
	};

	// навигация на таблицу карточек
	const showCardsPack = (id: string) => {
		navigate(`${PATH.PACKS_LIST}/${id}`);
	};
	
	return (
		<>
			<div>
				{/*<input onChange={onChangePackName} value={namePack}/>*/}
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

