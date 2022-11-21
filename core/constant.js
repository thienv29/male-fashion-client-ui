export const Constant = {
    ADDRESS: '273 An D. Vương, Phường 3, Quận 5, Thành phố Hồ Chí Minh',
};
export const PAYMENT_METHOD = {
    BANKING: 'BANKING',
    COD: 'COD',
};
export const SALE_ORDER_STATUS = {
    PENDING: 'PENDING',
    CONFIRM: 'CONFIRM',
    DELIVERING: 'DELIVERING',
    COMPLETED: 'COMPLETED',
    getNumber: (status) => {
        switch (status) {
            case 'PENDING':
                return 0;
            case 'CONFIRM':
                return 1;
            case 'DELIVERING':
                return 2;
            case 'COMPLETED':
                return 3;
        }
    },
};
export const VOUCHER_STATUS = {
    NON_START: 'NON_START',
    HAPPENING: 'HAPPENING',
    OVER: 'OVER',
};

