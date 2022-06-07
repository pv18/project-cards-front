import React, {ChangeEvent, useState} from 'react';

import {ApiCards} from '../../api/api';

import {TablePacks} from './TablePacks';

export const TablePacksContainer = () => {

	const [namePack, setNamePack] = useState<string>('');

	const onChangePackName = (e: ChangeEvent<HTMLInputElement>) => {
		setNamePack(e.currentTarget.value);
	};

	const onHandlerSubmitPackName = () => {

		if (namePack.length > 5) {
			ApiCards.postCards({name: namePack})
			.then(res => {
				// console.log(res);
			})
			.catch(err => {
				// console.log(err);
			});
		}
	};
	
	return (
		<>
			<div>
				<input onChange={onChangePackName} value={namePack}/>
				<button onClick={onHandlerSubmitPackName}>
					add new pack
				</button>
			</div>
			<TablePacks />
		</>
	);
};

