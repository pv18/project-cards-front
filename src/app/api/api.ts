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
export type LogOutResponseType = {
    info: string,
    error: string;
}
export type RecoveryResponseType = {
    info: string,
    error: string;
}
const instance = axios.create({
    // process.env.REACT_APP_BACK_URL || для gh-page
    // https://neko-back.herokuapp.com/2.0/ для gh-page
    // http://localhost:7542/2.0/
    baseURL: 'http://localhost:7542/2.0/',
    // baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
});


export const AuthAPI = {

    loginMe(data: LoginDataType) {
        return instance.post<AuthResponseType>('auth/login', data);
    },
    registrationMe(data: RegistrationDataType) {
        return instance.post<RegistrationResponseType>('auth/register', data);
    },
    recoveryPass(email: string) {
        return instance.put<RecoveryResponseType>('auth/forgot', {
            email, // кому восстанавливать пароль
            from: "test-front-admin <kisseli@mail.ru>",
            // можно указать разработчика фронта)
            message: `<div style="background-color: lime; padding: 15px">
            password recovery link: 
            <a href='http://localhost:3000/#/set-new-password/$token$'>
            link</a>
            </div>` // хтмп-письмо, вместо $token$ бэк вставит токен
        })
            .then(res => res.data)
    },
    logOut() {
        return instance.delete<LogOutResponseType>('/auth/me', {})
            .then(res => res.data)
    }

};

export const ProfileAPI = {
    getProfile() {
        return instance.post<AuthResponseType>('/auth/me', {})
            .then(res => {
                return res.data;
            });
    },
    putProfile(name: string, avatar: string) {
        return instance.put('/auth/me', {name, avatar})
            .then(res => {
                return res.data;
            });
    },
};

