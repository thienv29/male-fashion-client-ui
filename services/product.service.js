import axiosClient from './base';

const ProductService = {

    getAll: () => {
        return axiosClient.get('/product/get-all');
    },
    getById: (id) => {
        return axiosClient.get(`/product/get/${id}`);
    },

};
export default ProductService;
