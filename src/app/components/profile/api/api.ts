import axios from "axios";

export const instance = axios.create({
    //process.env.REACT_APP_BACK_URL ||
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const ProfileAPI = {
    getProfile() {
        return instance.post('/auth/me', {})
            .then(res => {
                return res.data
            })
    },
    putProfile(name:string, avatar: string) {
        return instance.put('/auth/me', {name, avatar})
            .then(res => {
                return res.data
            })
    },
};