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

export type RegistrationDataType = {
	email: string,
	password: string,
}

export type RegistrationResponseType = {
	addUser: any,
	error?: string,
}

const instance = axios.create({
	// process.env.REACT_APP_BACK_URL || для gh-page
	// https://neko-back.herokuapp.com/2.0/ для gh-page
	// http://localhost:7542/2.0/
	baseURL: 'https://neko-back.herokuapp.com/2.0/',
	withCredentials: true,
});


export const AuthAPI = {

	loginMe(data: LoginDataType) {
		return instance.post<AuthResponseType>('auth/login', data);
	},
    registrationMe(data: RegistrationDataType) {
        return instance.post<RegistrationResponseType>('auth/register', data);
    },

};

export const ProfileAPI = {
	getProfile() {
		return instance.post<AuthResponseType>('/auth/me', {})
		.then(res => {
			return res.data;
		});
	},
	putProfile(name:string, avatar: string) {
		return instance.put('/auth/me', {name, avatar})
		.then(res => {
			return res.data;
		});
	},
};

