import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import CartItems from '../components/shared/cart-items';
import CartService from '../services/cart_service';

export default function Cart() {
    const [itemsCart, setItemsCart] = useState([]);

    // useEffect(() => {
    //     getItemsCart();
    // }, []);

    const getItemsCart = async () => {
        const data = await CartService.getAll();
        setItemsCart(data.result);
    };

    return (
        <Layout>
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Shopping Cart</h4>
                                <div className="breadcrumb__links">
                                    <a href="./index.html">Home</a>
                                    <a href="./shop.html">Shop</a>
                                    <span>Shopping Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shopping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="shopping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {itemsCart.map((item) => (
                                            <CartItems
                                                key={item._id}
                                                itemCart={item}
                                                getItemsCart={getItemsCart}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn">
                                        <a href="/shop">Continue Shopping</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn update__btn">
                                        <a href="#">
                                            <i className="fa fa-spinner" /> Update cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart__discount">
                                <h6>Discount codes</h6>
                                <form action="#">
                                    <input type="text" placeholder="Coupon code" defaultValue="" />
                                    <button type="submit">Apply</button>
                                </form>
                            </div>
                            <div className="cart__total">
                                <h6>Cart total</h6>
                                <ul>
                                    <li>
                                        Subtotal <span>$ 169.50</span>
                                    </li>
                                    <li>
                                        Total <span>$ 169.50</span>
                                    </li>
                                </ul>
                                <a href="/check-out" className="primary-btn">
                                    Proceed to checkout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {},
    };
}
