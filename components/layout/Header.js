import { useRouter } from 'next/router';

export default function Header() {
    return (
        <header className='header'>
            <div className='header__top'>
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
                                    <a href='/product-detail'>Sign in</a>
                                    <a href='sign-in'>Sign in</a>
                                    <a href='#'>FAQs</a>
                                </div>
                                <div className='header__top__hover'>
                                    <span>Usd <i className='arrow_carrot-down' /></span>
                                    <ul>
                                        <li>USD</li>
                                        <li>EUR</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3'>
                        <div className='header__logo'>
                            <a href='/'><img src='img/logo.png' alt='' /></a>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
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
                    <div className='col-lg-3 col-md-3'>
                        <div className='header__nav__option'>                        
                            <label for="search-input" href='#' className='search-switch'><img src='img/icon/search.png' alt='' /></label>
                            <input type="checkbox" hidden name="" class="search__input" id="search-input"></input>
                            <label for="search-input" class="side__overlay">

                            </label>
                            <nav className='sidebar-option'>
                                <form>
                                    <div className='input__group'>
                                        <input type="text" className='form__input'></input>
                                        <div><i class="fa fa-search" aria-hidden="true"></i></div>
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
