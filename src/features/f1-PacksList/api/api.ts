import axios from 'axios';

import {PackStateType} from './n0-bll/packListReducer';

type GetParamsType = {
	packName?: string
	min?: number
	max?: number
	sortPacks?: string
	page?: number
	pageCount?: number
	user_id?: string
}

type NewCardsPack = {
	name?: string
	deckCover?: string
	private?: boolean
}


const instance = axios.create({
	// process.env.REACT_APP_BACK_URL || для gh-page
	// https://neko-back.herokuapp.com/2.0/ для gh-page
	// http://localhost:7542/2.0/
	baseURL: 'http://localhost:7542/2.0/',
	// baseURL: 'https://neko-back.herokuapp.com/2.0/',
	withCredentials: true,
});

// cardsPack: {
// 	name: "no Name" // если не отправить будет таким
// 	deckCover: "url or base64" // не обязателен
// private: false // если не отправить будет такой
// }

export const apiCards = {
	getCards(params?: GetParamsType) {
		return instance.get<PackStateType>('cards/pack', {params});
	},

	postCards(cardsPack: NewCardsPack) {
		return instance.post<PackStateType>('cards/pack', {cardsPack});
	},

	deletePack(idPack: string) {
		return instance.delete<PackStateType>('cards/pack', {params:{id: idPack}});
	},
};