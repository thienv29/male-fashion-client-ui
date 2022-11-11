import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Product from '../components/shared/product';
import CategoryService from '../services/category.service';
import SizeService from '../services/size.service';
import SupplierService from '../services/supplier.service';
import ProductService from '../services/product.service';
import WishlistService from '../services/wishlist.service';
import { useSelector } from 'react-redux';

export default function Shop() {
    const [categories, setCategories] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [productsPagination, setProductsPagination] = useState([]);
    const [filterCate, setFilterCate] = useState('');
    const [filterSupplier, setFilterSupplier] = useState('');
    const [filterSize, setFilterSize] = useState('');
    const [filterPrice, setFilterPrice] = useState(0);
    const [curPage, setCurPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);

    const user = useSelector(state => state.user);



    // let priceTo = document.getElementById('slider-range-value2').textContent;


    useEffect(() => {
        getCategories();
        getSizes();
        getBrands();
        getProductByFilter()

    }, []);

    useEffect(() => {
        getProductByFilter()
    }, [filterCate, filterSupplier, filterPrice, filterSize, curPage]);

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
    const getProductByFilter = async () => {
        const data = await ProductService.getProductByFilter({
            cate: filterCate,
            supplier: filterSupplier,
            priceTo: filterPrice,
            size: filterSize,
            page: curPage,
        });
        setProductsPagination(data.result.products);
        if ((data.result.totalItem % data.result.limit) == 0) {
            setMaxPage(data.result.totalItem / data.result.limit);
        }
        else {
            setMaxPage(Math.floor((data.result.totalItem / data.result.limit)) + 1);
        }
        // setMaxPage(Math.floor((data.result.totalItem / limit)) + 1);
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
                                                        <div className='container mt-4'>
                                                            <div className='row'>
                                                                <div className='col-sm-12'>
                                                                    <input style={{ width: '100%' }} type="range" min="0" max="2000" class="form-range" value={filterPrice} id="customRange1" onChange={(e) => setFilterPrice(e.target.value)} />
                                                                </div>
                                                            </div>
                                                            {/* <div className='row slider-labels'>
                                                                <div className='col-xs-6 caption' id='slider-range-value1'>
                                                                </div>
                                                                <div className='col-xs-6 price-text-right caption'
                                                                    id='slider-range-value2'>
                                                                </div>
                                                            </div>
                                                            <div className='row'>
                                                                <div className='col-sm-12'>
                                                                    <form>
                                                                        <input type='hidden' name='min-value'
                                                                            value='$0' />
                                                                        <input type='hidden' name='max-value'
                                                                            value='' />
                                                                    </form>
                                                                </div>
                                                            </div> */}
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

                                                                    return (<li key={index} className={filterCate == item._id ? 'active-filter' : ''} onClick={() => setFilterCate(item._id)}> <a href='javascript:;'>{item.name}</a>
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
                                                                    return <li key={index} className={filterSupplier == item._id ? 'active-filter' : ''} onClick={() => setFilterSupplier(item._id)}><a
                                                                        href='javascript:;'>{item.sortName}</a></li>;
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
                                                                    htmlFor={item.name} className={filterSize == item._id ? 'active' : ''} onClick={() => setFilterSize(item._id)} id={item.name}>{item.name}
                                                                    <input type='radio' />
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
                                        <div className='col-lg-6 col-md-6 col-sm-6'>
                                            <div className='shop__product__option__left'>
                                                <p>Showing 1–12 of 126 results</p>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-6'>
                                            <div className='shop__product__option__right'>
                                                <p>Sort by Price:</p>
                                                <select>
                                                    <option value=''>Low To High</option>
                                                    <option value=''>$0 - $55</option>
                                                    <option value=''>$55 - $100</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='shop__product__option'>
                                    <div className='row'>

                                        {productsPagination.map(item => {
                                            return <Product product={item} key={item._id} />;
                                        })}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12 flex-center'>
                                        {/* <div className='product__pagination'>

                                            <a className='active' href='#'>1</a>
                                            <a href='#'>2</a>
                                            <a href='#'>3</a>
                                        </div> */}
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className={`page-item ${curPage == 1 ? 'disabled' : ''}`} onClick={() => setCurPage(curPage - 1)}>
                                                    <a className="page-link" href="javascript:;" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                        <span className="sr-only">Previous</span>
                                                    </a>
                                                </li>
                                                {curPage == 1 ? '' : <li className="page-item" ><a className="page-link" href="javascript:;" onClick={() => setCurPage(curPage - 1)}>{curPage - 1}</a></li>}
                                                <li className="page-item active" ><a className="page-link" href="javascript:;">{curPage}</a></li>
                                                {curPage < maxPage ? <li className="page-item" ><a className="page-link" href="javascript:;" onClick={() => setCurPage(curPage + 1)}>{curPage + 1}</a></li> : ''}
                                                <li className={`page-item ${curPage == maxPage ? 'disabled' : ''}`} onClick={() => setCurPage(curPage + 1)}>
                                                    <a className="page-link" href="javascript:;" aria-label="Next" >
                                                        <span aria-hidden="true">&raquo;</span>
                                                        <span className="sr-only">Next</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                        {console.log(curPage, maxPage)}
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
