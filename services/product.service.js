import axiosClient from './base';

const ProductService = {

    getAll: () => {
        return axiosClient.get('/product/get-all');
    },
    getFeature: () => {
        return axiosClient.get('/product/get-feature');
    },
    getRelatedProducts: (id) => {
        return axiosClient.get(`/product/get-related/${id}`);
    },
    getById: (id) => {
        return axiosClient.get(`/product/get/${id}`);
    },

};
export default ProductService;
