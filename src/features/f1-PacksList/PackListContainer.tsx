import React, {ChangeEvent, useState} from 'react';

import {TablePacks} from './TablePacks';
import {apiCards} from './api/api';

export const PackListContainer = () => {

	const [namePack, setNamePack] = useState<string>('');

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
				<input onChange={onChangePackName} value={namePack}/>
				<button onClick={onHandlerSubmitPackName}>
					add new pack
				</button>
			</div>
			<TablePacks/>
		</div>

	);
};

