import { useSelector } from 'react-redux';
import Layout from '../components/layout';

export default function CheckOut() {
    const user = useSelector((state) => state.user);

    return (
        <Layout>
            <section className='breadcrumb-option'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='breadcrumb__text'>
                                <h4>Check Out</h4>
                                <div className='breadcrumb__links'>
                                    <a href='./'>Home</a>
                                    <a href='./shop'>Shop</a>
                                    <span>Check Out</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='checkout spad'>
                <div className='container'>
                    <div className='checkout__form'>
                        <form action='#'>
                            <div className='row'>
                                <div className='col-lg-8 col-md-6'>
                                    <h6 className='coupon__code'><span className='icon_tag_alt' /> Have a
                                        coupon? <a href='#'>Click
                                            here</a> to enter your code</h6>
                                    <h6 className='checkout__title'>Billing Details</h6>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className='checkout__input'>
                                                <p>Fist Name<span>*</span></p>
                                                <input type='text' defaultValue={user.firstName} />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className='checkout__input'>
                                                <p>Last Name<span>*</span></p>
                                                <input type='text'  defaultValue={user.lastName}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='checkout__input'>
                                        <p>Address<span>*</span></p>
                                        <input type='text' placeholder='Street Address'
                                            className='checkout__input__add'  defaultValue={user.address}/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className='checkout__input'>
                                                <p>Phone<span>*</span></p>
                                                <input type='text' defaultValue={user.phone}/>
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className='checkout__input'>
                                                <p>Email<span>*</span></p>
                                                <input type='text' defaultValue={user.email}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='checkout__input'>
                                        <p>Order notes<span>*</span></p>
                                        <input type='text'
                                            placeholder='Notes about your order, e.g. special notes for delivery.' />
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='checkout__order'>
                                        <h4 className='order__title'>Your order</h4>
                                        <div className='checkout__order__products'>Product <span>Total</span></div>
                                        <ul className='checkout__total__products'>
                                            <li>01. Vanilla salted caramel <span>$ 300.0</span></li>
                                            <li>02. German chocolate <span>$ 170.0</span></li>
                                            <li>03. Sweet autumn <span>$ 170.0</span></li>
                                            <li>04. Cluten free mini dozen <span>$ 110.0</span></li>
                                        </ul>
                                        <ul className='checkout__total__all'>
                                            <li>Subtotal <span>$750.99</span></li>
                                            <li>Total <span>$750.99</span></li>
                                        </ul>
                                        <div className='checkout__input__checkbox'>
                                            <label htmlFor='acc-or'>
                                                Create an account?
                                                <input type='checkbox' id='acc-or' />
                                                <span className='checkmark' />
                                            </label>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor
                                            incididunt
                                            ut labore et dolore magna aliqua.</p>
                                        <div className='checkout__input__checkbox'>
                                            Select Payment Method:
                                            <div className='input-group'>
                                                <select className='payment_method mt-2 mb-2'>
                                                    <option selected>COD</option>
                                                    <option value='1'>Banking</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button type='submit' className='site-btn'>PLACE ORDER</button>
                                    </div>
                                </div>
                            </div>
                        </form>
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
