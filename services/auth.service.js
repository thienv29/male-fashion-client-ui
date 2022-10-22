import axiosClient from './base';
import axios from 'axios';
import querystring from 'query-string';

const AuthService = {
    login: (user) => {
        return axiosClient.post('/auth/login', user);
    },

    refreshToken: () => {
        return axios.post(`/auth/refresh-token`, {}, {
            baseURL: 'http://localhost:5000/api/v1',
            headers: {
                'content-type': 'application/json',
            },
            withCredentials: true,
            paramsSerializer: params => querystring.stringify(params),
        });
    },

};
export default AuthService;
