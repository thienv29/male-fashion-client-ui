import axiosClient from './base';

const UserService = {
    getById: (id) => {
        return axiosClient.get(`/user/get/${id}`);
    },

};
export default UserService;
