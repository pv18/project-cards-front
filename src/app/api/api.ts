import axios from 'axios';

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
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
});


export const AuthAPI = {

    registrationMe(data: RegistrationDataType) {
        return instance.post<RegistrationResponseType>('auth/register', data)
    },

};

