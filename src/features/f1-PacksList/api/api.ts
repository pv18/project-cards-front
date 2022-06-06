import axios from 'axios';


const instance = axios.create({
	// process.env.REACT_APP_BACK_URL || для gh-page
	// https://neko-back.herokuapp.com/2.0/ для gh-page
	// http://localhost:7542/2.0/
	baseURL: 'http://localhost:7542/2.0/',
	// baseURL: 'https://neko-back.herokuapp.com/2.0/',
	withCredentials: true,
});

export const apiCards = {
	getCards() {
		return instance.get('cards/pack', {params: {pageCount: 10}});
	},
};