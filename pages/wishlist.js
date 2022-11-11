import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import WishlistService from '../services/wishlist.service';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    });

    const getProducts = async () => {
        const data = await WishlistService.getAll();
        console.log(data);
    }

    return (
        <Layout>
            <section className='breadcrumb-option'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='breadcrumb__text'>
                                <h4 className='wistlist__title'>Wish list </h4>
                                <div className='breadcrumb__links'>
                                    <a href='./index.html'>Home</a>
                                    <a href='./shop.html'>Shop</a>
                                    <span>Wish List</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='wishlist spad'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-auto '>
                            <div className='shopping__wishlist__table'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='product__wishlist__item'>
                                                <div className='product__wishlist__item__pic'>
                                                    <a href='#'>
                                                        <img src='img/shopping-cart/cart-1.jpg' alt='' />
                                                    </a>
                                                </div>
                                                <div className='product__wishlist__item__text'>
                                                    <a href='#'>T-shirt Contrast Pocket</a>
                                                </div>
                                            </td>
                                            <td className='wishlist__price'>$ 30.00</td>
                                            <td>
                                                <div>
                                                    <div className='add__btn'>
                                                        <a href='#'><i className='fa fa-cart-plus' /> Add to cart</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='wishlist__close'><i className='fa fa-close' /></td>
                                        </tr>
                                        <tr>
                                            <td className='product__wishlist__item'>
                                                <div className='product__wishlist__item__pic'>
                                                    <a href='#'>
                                                        <img src='img/shopping-cart/cart-2.jpg' alt='' />
                                                    </a>
                                                </div>
                                                <div className='product__wishlist__item__text'>
                                                    <a href='#'>Diagonal Textured Cap</a>
                                                </div>
                                            </td>
                                            <td className='wishlist__price'>$ 32.50</td>
                                            <td>
                                                <div>
                                                    <div className='add__btn'>
                                                        <a href='#'><i className='fa fa-cart-plus' /> Add to cart</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='wishlist__close'><i className='fa fa-close' /></td>
                                        </tr>
                                        <tr>
                                            <td className='product__wishlist__item'>
                                                <div className='product__wishlist__item__pic'>
                                                    <a href='#'>
                                                        <img src='img/shopping-cart/cart-3.jpg' alt='' />
                                                    </a>
                                                </div>
                                                <div className='product__wishlist__item__text'>
                                                    <a href='#'>Basic Flowing Scarf</a>
                                                </div>
                                            </td>
                                            <td className='wishlist__price'>$ 47.00</td>
                                            <td>
                                                <div>
                                                    <div className='add__btn'>
                                                        <a href='#'><i className='fa fa-cart-plus' /> Add to cart</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='wishlist__close'><i className='fa fa-close' /></td>
                                        </tr>
                                        <tr>
                                            <td className='product__wishlist__item'>
                                                <div className='product__wishlist__item__pic'>
                                                    <a href='#'>
                                                        <img src='img/shopping-cart/cart-4.jpg' alt='' />
                                                    </a>
                                                </div>
                                                <div className='product__wishlist__item__text'>
                                                    <a href='#'>Basic Flowing Scarf</a>
                                                </div>
                                            </td>
                                            <td className='wishlist__price'>$ 30.00</td>
                                            <td>
                                                <div>
                                                    <div className='add__btn'>
                                                        <a href='#'><i className='fa fa-cart-plus' /> Add to cart</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='wishlist__close'><i className='fa fa-close' /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='row'>
                                <div className='col-md-12 col-sm-12'>
                                    <div className='continue__btn'>
                                        <a href='/shop'>Continue Shopping</a>
                                    </div>
                                </div>
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
