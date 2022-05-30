import axios from 'axios';

export type LoginDataType = {
	email: string,
	password: string,
	rememberMe: boolean
}

export type AuthResponseType = {
		_id: string;
		email: string;
		name: string;
		avatar?: string;
		publicCardPacksCount: number;
// количество колод
		created: '';
		updated: '';
		isAdmin: boolean;
		verified: boolean; // подтвердил ли почту
		rememberMe: boolean;
		error?: string;
}


const instance = axios.create({
	// process.env.REACT_APP_BACK_URL || для gh-page
	baseURL: 'http://localhost:7542/2.0/',
	withCredentials: true,
});


export const AuthAPI = {

	loginMe(data: LoginDataType) {
		return instance.post<AuthResponseType>('auth/login', data);
	},

};