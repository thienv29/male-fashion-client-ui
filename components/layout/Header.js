import { useEffect, useState } from 'react';

export default function Header() {
    // const [position, setPosition] = useState(window.pageYOffset)
    const [visibles, setVisibles] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            let moving = window.pageYOffset;
            setVisibles(moving >= 5);
        };
        window.addEventListener('scroll', handleScroll);
        return (() => {
            window.removeEventListener('scroll', handleScroll);
        });
    }, [visibles]);
    return (
        <header className='header'>
            <div className='header__top'
                 style={visibles ? { height: 0, padding: '0px' } : { height: 'unset', padding: '10px 0' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-7'>
                            <div className='header__top__left'>
                                <p>Free shipping, 30-day return or refund guarantee.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-5'>
                            <div className='header__top__right'>
                                <div className='header__top__links'>
                                    <a href='#'>Sign in</a>
                                <div className="header__navbar-item header__navbar-user">
                                        <img src="img/shopping-cart/cart-1.jpg" alt="" class="header__navbar-user-img" 
                                        style={visibles ? { display: 'none' } : { }}></img>
                                        <span class="header__navbar-user-name">Nguyễn Tuấn Hải</span>
                                        <ul class="header__navbar-user-menu">
                                            <li class="header__navbar-user-item">
                                                <a href="/userprofile">My Account</a>
                                            </li>
                                            <li class="header__navbar-user-item">
                                                <a href="/history-order">History Order</a>
                                            </li>
                                            <li class="header__navbar-user-item header__navbar-user-item--separate">
                                                <a href="">Log Out</a>
                                            </li>
                                        </ul>
                                </div>
                                </div>
                                <div className='header__top__hover'>
                                    <span>Usd <i className='arrow_carrot-down' /></span>
                                    <ul>
                                        <li><a href="/sign-in">Đăng nhập</a></li>
                                        <li><a href="/sign-up">Đăng ký</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-3'>
                        <div className='header__logo'>
                            <a href='/'><img src='img/logo.png' alt='' /></a>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <nav className='header__menu mobile-menu'>
                            <ul>
                                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                <li className='active'><a href='/'>Home</a></li>
                                <li><a href='/shop'>Shop</a></li>
                                <li><a href='/about'>US</a>
                                    <ul className='dropdown'>
                                        <li className='active'><a href='/about'>About Us</a></li>
                                        <li><a href='/contact'>Contact</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='col-lg-4 col-md-3'>
                        <div className='header__nav__option'>
                            <label for='search-input' href='#' className='search-switch'><img src='img/icon/search.png'
                                                                                              alt='' /></label>
                            <input type='checkbox' hidden name='' className='search__input' id='search-input'></input>
                            <label for='search-input' className='side__overlay'>

                            </label>
                            <nav className='sidebar-option'>
                                <form>
                                    <div className='input__group'>
                                        <input type='text' className='form__input'></input>
                                        <div><i className='fa fa-search' aria-hidden='true'></i></div>
                                    </div>
                                </form>
                            </nav>

                            <a href='/wishlist'><img src='img/icon/heart.png' alt='' /></a>
                            <a href='/cart'><img src='img/icon/cart.png' alt='' /> <span>0</span></a>
                            <div className='price'>$0.00</div>
                        </div>
                    </div>
                </div>
                <div className='canvas__open'><i className='fa fa-bars' /></div>
            </div>
        </header>
    );
}
