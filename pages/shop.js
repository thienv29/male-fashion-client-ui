import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Product from '../components/shared/product';
import CategoryService from '../services/category.service';
import SizeService from '../services/size.service';
import SupplierService from '../services/supplier.service';
import ColorService from '../services/color.service';
import ProductService from '../services/product.service';

export default function Shop() {
    const [categories, setCategories] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [products, setProducts] = useState([]);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        getCategories();
        getSizes();
        getBrands();
        getProducts();
        getColors();
    }, []);
    const getCategories = async () => {
        const data = await CategoryService.getAll();
        setCategories(data.result);
    };
    const getBrands = async () => {
        const data = await SupplierService.getAll();
        setSuppliers(data.result);
    };
    const getSizes = async () => {
        const data = await SizeService.getAll();
        setSizes(data.result);
    };
    const getProducts = async () => {
        const data = await ProductService.getAll();
        setProducts(data.result);
    };
    const getColors = async () => {
        const data = await ColorService.getAll();
        setColors(data.result);
    };
    return (
        <>
            <Layout>
                <section className='breadcrumb-option'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='breadcrumb__text'>
                                    <h4>Shop</h4>
                                    <div className='breadcrumb__links'>
                                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                        <a href='/'>Home</a>
                                        <span>Shop</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='shop spad'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <div className='shop__sidebar'>
                                    <div className='shop__sidebar__search'>
                                        <form action='#'>
                                            <input type='text' placeholder='Search...' />
                                            <button type='submit'><span className='icon_search' /></button>
                                        </form>
                                    </div>
                                    <div className='shop__sidebar__accordion'>
                                        <div className='accordion' id='accordionExample'>
                                            <div className='card'>
                                                <div className='card-heading'>
                                                    <a data-toggle='collapse' data-target='#collapseThree'>Filter
                                                        Price</a>
                                                </div>
                                                <div id='collapseThree' className='collapse show'
                                                     data-parent='#accordionExample'>
                                                    <div className='card-body'>
                                                        <div class='container mt-4'>
                                                            <div class='row'>
                                                                <div class='col-sm-12'>
                                                                    <div id='slider-range' />
                                                                </div>
                                                            </div>
                                                            <div class='row slider-labels'>
                                                                <div class='col-xs-6 caption' id='slider-range-value1'>
                                                                </div>
                                                                <div class='col-xs-6 price-text-right caption'
                                                                     id='slider-range-value2'>
                                                                </div>
                                                            </div>
                                                            <div class='row'>
                                                                <div class='col-sm-12'>
                                                                    <form>
                                                                        <input type='hidden' name='min-value'
                                                                               value='$0' />
                                                                        <input type='hidden' name='max-value'
                                                                               value='' />
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card'>
                                                <div className='card-heading'>
                                                    <a data-toggle='collapse' data-target='#collapseOne'>Categories</a>
                                                </div>
                                                <div id='collapseOne' className='collapse show'
                                                     data-parent='#accordionExample'>
                                                    <div className='card-body'>
                                                        <div className='shop__sidebar__categories'>
                                                            <ul className='nice-scroll'>

                                                                {categories.map((item, index) => {
                                                                    return (<li key={index}><a href='#'>{item.name}</a>
                                                                    </li>);
                                                                })}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card'>
                                                <div className='card-heading'>
                                                    <a data-toggle='collapse' data-target='#collapseTwo'>Branding</a>
                                                </div>
                                                <div id='collapseTwo' className='collapse show'
                                                     data-parent='#accordionExample'>
                                                    <div className='card-body'>
                                                        <div className='shop__sidebar__brand'>
                                                            <ul>
                                                                {suppliers.map((item, index) => {
                                                                    return <li key={index}><a
                                                                        href='#'>{item.sortName}</a></li>;
                                                                })}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card'>
                                                <div className='card-heading'>
                                                    <a data-toggle='collapse' data-target='#collapseFour'>Size</a>
                                                </div>
                                                <div id='collapseFour' className='collapse show'
                                                     data-parent='#accordionExample'>
                                                    <div className='card-body'>
                                                        <div className='shop__sidebar__size'>

                                                            {sizes.map((item, index) => {
                                                                return <label key={index}
                                                                              htmlFor={item.name}>{item.name}
                                                                    <input type='radio' id={item.name} />
                                                                </label>;
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card'>
                                                <div className='card-heading'>
                                                    <a data-toggle='collapse' data-target='#collapseFive'>Colors</a>
                                                </div>
                                                <div id='collapseFive' className='collapse show'
                                                     data-parent='#accordionExample'>
                                                    <div className='card-body'>
                                                        <div className='shop__sidebar__color'>
                                                            {colors.map((item, index) => {
                                                                return <label key={index} className={`c-${index}`}
                                                                              htmlFor={`sp-${index}`}>
                                                                    <input type='radio' id={`sp-${index}`} />
                                                                </label>;
                                                            })}

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-9'>
                                <div className='shop__product__option'>
                                    <div className='row'>

                                        {products.map(item => {
                                            return <Product product={item} key={item._id} />;
                                        })}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='product__pagination'>
                                            <a className='active' href='#'>1</a>
                                            <a href='#'>2</a>
                                            <a href='#'>3</a>
                                            <span>...</span>
                                            <a href='#'>21</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
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
