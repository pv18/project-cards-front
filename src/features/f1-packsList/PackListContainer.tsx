import React, {ChangeEvent, useState} from 'react';
/*
import {useSelector} from 'react-redux';

import {AppRootStateType} from '../../store/store';

import {TablePacks} from './TablePacks';
import {apiCards} from './api/api';
import {Button} from "../../components/c5-Button/Button";

export const PackListContainer = () => {

	const [namePack, setNamePack] = useState<string>('');
	const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);

	const onChangePackName = (e: ChangeEvent<HTMLInputElement>) => {
		setNamePack(e.currentTarget.value);
	};

	const onHandlerSubmitPackName = () => {

		if (namePack.length > 5) {
			apiCards.postCards({name: namePack})
				.then(res => {
					// console.log(res);
				})
				.catch(err => {
					// console.log(err);
				});
		}
	};


	return (
		<div>
			<div>
				<input onChange={onChangePackName}
					   value={namePack}
					   disabled={isLoading}/>
				{/!*<button onClick={onHandlerSubmitPackName}
						disabled={isLoading}>
					add new pack
				</button>*!/}
				<Button disabled={isLoading}>+</Button>
			</div>
			<TablePacks/>
		</div>

	);
};*/

