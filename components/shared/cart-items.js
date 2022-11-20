import React from 'react';
import CartService from '../../services/cart_service';

const CartItems = ({ itemCart, getItemsCart }) => {
    const { _id, name, productDetail, quantity } = itemCart;
    const price = productDetail.salePrice > 0 ? productDetail.salePrice : productDetail.exportPrice;


    const handleDeleteItemCart = async () => {
        await CartService.delete(_id);
        getItemsCart();
    };

    return (
        <tr>
            <td className='product__cart__item'>
                <div className='product__cart__item__pic'>
                    <div className='product__wishlist__item__pics'
                         style={{ backgroundImage: `url(${productDetail.image})` }} />
                </div>
                <div className='product__cart__item__text'>
                    <h6>{name}</h6>
                    <h5>${price}</h5>
                </div>
            </td>
            <td className='quantity__item'>
                <div className='quantity'>
                    <div className='pro-qty-2'>
                        <input type='number' defaultValue={quantity} />
                    </div>
                </div>
            </td>
            <td className='cart__price'>${price * quantity}</td>
            <td className='cart__close' onClick={handleDeleteItemCart}><i className='fa fa-close' /></td>
        </tr>
    );
};

export default CartItems;
