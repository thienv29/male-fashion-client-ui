import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Product from '../components/shared/product';
import CategoryService from '../services/category.service';
import SizeService from '../services/size.service';
import SupplierService from '../services/supplier.service';
const data = {
    "message": [],
    "status": 200,
    "result": [
        {
            "_id": "6340ae1535b23fd5d0ad95d1",
            "name": "Áo sơ mi cộc tay nam Cuban Shirt STONE ATINO vải lụa form regular",
            "code": "SM1.4531",
            "badge": "HOT",
            "star": 1,
            "exportPrice": 6.24,
            "salePrice": 0,
            "description": "",
            "supplier": {
                "_id": "633dd777ef850b7c2c21e578",
                "firstName": "string",
                "lastName": "string",
                "sortName": "string-string",
                "phone": "0523923764",
                "birthday": "2022-06-27T00:00:00.000Z",
                "email": "thienv29@gmail.com",
                "address": "abc sd ds d",
                "avatar": "hello",
                "createdAt": "2022-10-05T19:13:59.549Z",
                "updatedAt": "2022-10-05T19:13:59.549Z"
            },
            "image": "img/product/product-2.jpg",
            "createdAt": "2022-10-07T22:54:13.174Z",
            "updatedAt": "2022-10-07T22:54:13.174Z"
        },
        {
            "_id": "6340ae1535b23fd5d0ad95d1",
            "name": "Áo sơ mi cộc tay nam Cuban Shirt STONE ATINO vải lụa form regular",
            "code": "SM1.4531",
            "badge": "HOT",
            "star": 4,
            "exportPrice": 6.24,
            "salePrice": 6,
            "description": "",
            "supplier": {
                "_id": "633dd777ef850b7c2c21e578",
                "firstName": "string",
                "lastName": "string",
                "sortName": "string-string",
                "phone": "0523923764",
                "birthday": "2022-06-27T00:00:00.000Z",
                "email": "thienv29@gmail.com",
                "address": "abc sd ds d",
                "avatar": "hello",
                "createdAt": "2022-10-05T19:13:59.549Z",
                "updatedAt": "2022-10-05T19:13:59.549Z"
            },
            "image": "img/product/product-2.jpg",
            "createdAt": "2022-10-07T22:54:13.174Z",
            "updatedAt": "2022-10-07T22:54:13.174Z"
        },
        {
            "_id": "6340ae1535b23fd5d0ad95d1",
            "name": "Áo sơ mi cộc tay nam Cuban Shirt STONE ATINO vải lụa form regular",
            "code": "SM1.4531",
            "badge": "HOT",
            "star": 1,
            "exportPrice": 6.24,
            "salePrice": 6,
            "description": "",
            "supplier": {
                "_id": "633dd777ef850b7c2c21e578",
                "firstName": "string",
                "lastName": "string",
                "sortName": "string-string",
                "phone": "0523923764",
                "birthday": "2022-06-27T00:00:00.000Z",
                "email": "thienv29@gmail.com",
                "address": "abc sd ds d",
                "avatar": "hello",
                "createdAt": "2022-10-05T19:13:59.549Z",
                "updatedAt": "2022-10-05T19:13:59.549Z"
            },
            "image": "img/product/product-3.jpg",
            "createdAt": "2022-10-07T22:54:13.174Z",
            "updatedAt": "2022-10-07T22:54:13.174Z"
        }
    ]
}
export default function Shop() {
    const [categories, setCategories] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        getCategories();
        getSizes();
        getBrands();
    }, [])
    const getCategories = async () => {
        const data = await CategoryService.getAll();
        setCategories(data.result);
    }
    const getBrands = async () => {
        const data = await SupplierService.getAll();
        console.log(data);
        setSuppliers(data.result);
    }
    const getSizes = async () => {
        const data = await SizeService.getAll();
        setSizes(data.result);
    }
    const getColors = async () => {

    }
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
                                            <button type='submit'><span className='icon_search'></span></button>
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
                                                        <div class="container mt-4">
                                                            <div class="row">
                                                                <div class="col-sm-12">
                                                                    <div id="slider-range"></div>
                                                                </div>
                                                            </div>
                                                            <div class="row slider-labels">
                                                                <div class="col-xs-6 caption" id="slider-range-value1">
                                                                </div>
                                                                <div class="col-xs-6 price-text-right caption" id="slider-range-value2">
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-12">
                                                                    <form>
                                                                        <input type="hidden" name="min-value" value="$0"></input>
                                                                        <input type="hidden" name="max-value" value=""></input>
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

                                                                {categories.map(item => {
                                                                    return <li><a href='#'>{item.name}</a></li>
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
                                                            {suppliers.map(item => {
                                                                return <li><a href='#'>{item.sortName}</a></li>
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

                                                            {sizes.map(item => {
                                                                return <label htmlFor={item.name}>{item.name}
                                                                    <input type='radio' id={item.name} />
                                                                </label>
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
                                                            <label className='c-1' htmlFor='sp-1'>
                                                                <input type='radio' id='sp-1' />
                                                            </label>
                                                            <label className='c-2' htmlFor='sp-2'>
                                                                <input type='radio' id='sp-2' />
                                                            </label>
                                                            <label className='c-3' htmlFor='sp-3'>
                                                                <input type='radio' id='sp-3' />
                                                            </label>
                                                            <label className='c-4' htmlFor='sp-4'>
                                                                <input type='radio' id='sp-4' />
                                                            </label>
                                                            <label className='c-5' htmlFor='sp-5'>
                                                                <input type='radio' id='sp-5' />
                                                            </label>
                                                            <label className='c-6' htmlFor='sp-6'>
                                                                <input type='radio' id='sp-6' />
                                                            </label>
                                                            <label className='c-7' htmlFor='sp-7'>
                                                                <input type='radio' id='sp-7' />
                                                            </label>
                                                            <label className='c-8' htmlFor='sp-8'>
                                                                <input type='radio' id='sp-8' />
                                                            </label>
                                                            <label className='c-9' htmlFor='sp-9'>
                                                                <input type='radio' id='sp-9' />
                                                            </label>
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

                                        {data.result.map(item => {
                                            return <Product product={item} />
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
        props: {

        },
    }
}