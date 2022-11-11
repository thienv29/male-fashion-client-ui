import axiosClient from './base';

const WishlistService = {

    getAll: () => {
        return axiosClient.get('/wishlist/get-all');
    },
    getById: (id) => {
        return axiosClient.get(`/wishlist/get/${id}`);
    },
    create: (wishlist) => {
        return axiosClient.post('/wishlist/create', wishlist);
    },


};
export default WishlistService;
