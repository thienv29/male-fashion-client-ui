import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'

export default function Header() {
    // const [position, setPosition] = useState(window.pageYOffset)
    const [visibles, setVisibles] = useState(false);
    useEffect(() => {
        console.log('render');
        const handleScroll = () => {
            let moving = window.pageYOffset
            console.log('moving', moving > 0)
            // console.log('position', position)
            setVisibles(moving >= 5);
            // setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    }, [visibles])
    return (
        <header className='header'>
            <div className='header__top' style={visibles ? { height: 0, padding: '0px' }:  { height: 'unset', padding: '10px 0' }}>
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
                                <a href='#' className='search-switch'><img src='img/icon/search.png' alt='' /></a>
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
