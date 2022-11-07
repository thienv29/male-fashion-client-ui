import Layout from '../components/layout';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ProductService from '../services/product.service';
import Product from '../components/shared/product';

export default function ProductDetail() {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [sizes, setSizes] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizeSelected, setSizeSelected] = useState('');
    const [colorSelected, setColorSelected] = useState('');
    const router = useRouter();
    const { id } = router.query;


    const { image, name, code, description, supplier, star, exportPrice, salePrice, listDetails } = product;
    // console.log(supplier)

    useEffect(() => {
        getRelatedProducts(id);
        getProductById(id);

    }, []);

    useEffect(() => {
        standardDataColors();
        standardDataSizes();
    }, [product])


    const standardDataColors = () => {
        const colorsCreated = [];
        if (listDetails) {
            listDetails.forEach(detail => {
                if (colorsCreated.findIndex(item => item._id == detail.color._id) == -1) {
                    colorsCreated.push(detail.color)
                };
            });
            setColors(colorsCreated);
        }
    }

    const standardDataSizes = () => {
        const sizesCreated = [];
        if (listDetails) {
            listDetails.forEach(detail => {
                if (sizesCreated.findIndex(item => item._id == detail.size._id) == -1) {
                    sizesCreated.push(detail.size)
                };
            });
            setSizes(sizesCreated);
        }
    }

    const getProductById = async () => {
        const data = await ProductService.getById(id);
        const product = data.result;
        setProduct(product);
    }

    const getRelatedProducts = async (id) => {
        const data = await ProductService.getRelatedProducts(id);
        setRelatedProducts(data.result);
    }

    const handleClickSize = (id) => {
        setSizeSelected(id);
    }

    const handleClickColor = (id) => {
        setColorSelected(id);
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
                                    <div className='product__details__breadcrumb'>
                                        <a href='/'>Home</a>
                                        <a href='/shop'>Shop</a>
                                        <span>Product Details</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='shop spad'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 col-lg-12 col-xs-12 col-sm-12'>
                                <div className='row'>
                                    <div className='col-xs-12 col-sm-6 col-lg-6 col-md-6'>
                                        <div className='product-img-main'>
                                            <img src={image} alt='' />
                                        </div>
                                        <div className='d-flex mt-2 product-img-container'>
                                            {listDetails ? listDetails.map((detail) => (
                                                <div className=' product-img-child'>
                                                    <img src={detail.image} alt='' />
                                                </div>
                                            )) : ''}

                                        </div>

                                    </div>
                                    <div className='col-xs-12 col-sm-6 col-lg-6 col-md-6'>
                                        <h1 className=''>{name}</h1>
                                        <div className='d-flex mb-3'>
                                            <div className='item-sku'>
                                                SKU: <span className='variant-sku' itemProp='sku'
                                                    content='N102-S-W'>{listDetails ? listDetails.map((detail) =>
                                                        (detail.color._id == colorSelected && detail.size._id == sizeSelected ? detail.code : '')
                                                    ) : ''}</span>
                                            </div>
                                            &nbsp; | &nbsp;
                                            <div className='item-sku'>
                                                NCC: 
                                                <span className='vendor'>
                                                    {supplier ? supplier.sortName : ''}
                                                </span>
                                            </div>
                                            &nbsp; | &nbsp;
                                            <div className='rating'>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star-o'></i>
                                                <span> - 5 Reviews</span>
                                            </div>
                                        </div>
                                        <div className='product__details__text'>
                                            <div className='d-flex justify-content-between'>
                                                <h3 className='text-left'>$270.00 <span>70.00</span></h3>
                                                <div className=' text-left'>
                                                    <a className=' size-heart-icon'><i className='fa fa-heart'></i> </a>
                                                </div>
                                            </div>
                                            <div className='product__details__option  text-left'>
                                                <div className='product__details__option__size mb-3'>
                                                    <span>Size:</span>
                                                    {sizes ? sizes.map((detail) => (
                                                        <label htmlFor={detail.name} className={sizeSelected == detail._id ? 'active' : ''} onClick={() => handleClickSize(detail._id)}>{detail.name}
                                                            <input type='radio' name='size' id={detail.name} value={detail._id} />
                                                        </label>
                                                    )) : ''}
                                                    {/* <label htmlFor='xxl'>xxl
                                                        <input type='radio' id='xxl' />
                                                    </label>
                                                    <label className='active' htmlFor='xl'>xl
                                                        <input type='radio' id='xl' />
                                                    </label>
                                                    <label htmlFor='l'>l
                                                        <input type='radio' id='l' />
                                                    </label>
                                                    <label htmlFor='sm'>s
                                                        <input type='radio' id='sm' />
                                                    </label> */}
                                                </div>
                                                <div className='product__details__option__color'>
                                                    <span>Color:</span>
                                                    {colors ? colors.map((detail) => (
                                                        <label style={{ backgroundColor: detail.code }} htmlFor={detail.name} onClick={() => handleClickColor(detail._id)}>
                                                            <input type='radio' name='color' id={detail.name} value={detail._id} />
                                                        </label>
                                                    )) : ''}
                                                    {/* <label className='c-1' htmlFor='sp-1'>
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
                                                    <label className='c-9' htmlFor='sp-9'>
                                                        <input type='radio' id='sp-9' />
                                                    </label> */}
                                                </div>

                                            </div>
                                            <p className='text-left'>{description}</p>
                                            <div className='product__details__cart__option text-left'>
                                                <a href='#' className='primary-btn mr-3'>add to cart</a>
                                                <div className='quantity'>
                                                    <div className='pro-qty'>
                                                        <input type='text' value='1' />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='product__details__last__option'>
                                                <h5><span>Guaranteed Safe Checkout</span></h5>
                                                <img src='img/shop-details/details-payment.png' alt='' />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='product__details__tab'>
                                            <ul className='nav nav-tabs' role='tablist'>
                                                <li className='nav-item'>
                                                    <a className='nav-link active' data-toggle='tab' href='#tabs-5'
                                                        role='tab'>Description</a>
                                                </li>
                                                <li className='nav-item'>
                                                    <a className='nav-link' data-toggle='tab' href='#tabs-6' role='tab'>Customer
                                                        Previews(5)</a>
                                                </li>
                                            </ul>
                                            <div className='tab-content'>
                                                <div className='tab-pane active' id='tabs-5' role='tabpanel'>
                                                    <div className='product__details__tab__content'>
                                                        <p className='note'>Nam tempus turpis at metus scelerisque
                                                            placerat nulla deumantos
                                                            solicitud felis. Pellentesque diam dolor, elementum etos
                                                            lobortis des mollis
                                                            ut risus. Sedcus faucibus an sullamcorper mattis drostique
                                                            des commodo
                                                            pharetras loremos.</p>
                                                        <div className='product__details__tab__content__item'>
                                                            <h5>Products Infomation</h5>
                                                            <p>A Pocket PC is a handheld computer, which features many
                                                                of the same
                                                                capabilities as a modern PC. These handy little devices
                                                                allow
                                                                individuals to retrieve and store e-mail messages,
                                                                create a contact
                                                                file, coordinate appointments, surf the internet,
                                                                exchange text messages
                                                                and more. Every product that is labeled as a Pocket PC
                                                                must be
                                                                accompanied with specific software to operate the unit
                                                                and must feature
                                                                a touchscreen and touchpad.</p>
                                                            <p>As is the case with any new technology product, the cost
                                                                of a Pocket PC
                                                                was substantial during it’s early release. For
                                                                approximately $700.00,
                                                                consumers could purchase one of top-of-the-line Pocket
                                                                PCs in 2003.
                                                                These days, customers are finding that prices have
                                                                become much more
                                                                reasonable now that the newness is wearing off. For
                                                                approximately
                                                                $350.00, a new Pocket PC can now be purchased.</p>
                                                        </div>
                                                        <div className='product__details__tab__content__item'>
                                                            <h5>Material used</h5>
                                                            <p>Polyester is deemed lower quality due to its none natural
                                                                quality’s. Made
                                                                from synthetic materials, not natural like wool.
                                                                Polyester suits become
                                                                creased easily and are known for not being breathable.
                                                                Polyester suits
                                                                tend to have a shine to them compared to wool and cotton
                                                                suits, this can
                                                                make the suit look cheap. The texture of velvet is
                                                                luxurious and
                                                                breathable. Velvet is a great choice for dinner party
                                                                jacket and can be
                                                                worn all year round.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane' id='tabs-6' role='tabpanel'>
                                                    <div className='product__details__tab__content'>
                                                        <div className='row'>
                                                            <div className='col-md-1'>
                                                                <img src='img/about/team-1.jpg' alt='' />
                                                            </div>
                                                            <div className='col-md-11'>
                                                                <div className='customer-name'>Sam</div>
                                                                <div className='rating'>
                                                                    <i className='fa fa-star'></i>
                                                                    <i className='fa fa-star'></i>
                                                                    <i className='fa fa-star'></i>
                                                                    <i className='fa fa-star'></i>
                                                                    <i className='fa fa-star-o'></i>
                                                                </div>
                                                                <div className='d-flex mb-3'>
                                                                    <div className='rating-time'>
                                                                        <div className='time'>2022-10-02 20:00</div>
                                                                    </div>
                                                                    &nbsp; | &nbsp;
                                                                    <div className='rating-time'>
                                                                        Phân loại:
                                                                        &nbsp;
                                                                        <span className='product-name'>
                                                                            MULTIPLE PERSONALITY T-SHIRT
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className='comment'>Hello hello 1 2 3 4</div>
                                                            </div>
                                                            <hr width='100%' align='center' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Related Section Begin --> */}
                                <section className='related spad'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-lg-12'>
                                                <h3 className='related-title'>Related Product</h3>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            {relatedProducts.map(item => {
                                                return <Product typeCol={true} product={item} key={item._id} />;
                                            })}
                                            {/* <div className='col-lg-3 col-md-6 col-sm-6 col-sm-6'>
                                                <div className='product__item'>
                                                    <div className='product__item__pic set-bg'
                                                         data-setbg='img/product/product-1.jpg'>
                                                        <span className='label'>New</span>
                                                        <ul className='product__hover'>
                                                            <li><a href='#'><img src='img/icon/heart.png' alt='' /></a>
                                                            </li>
                                                            <li><a href='#'><img src='img/icon/compare.png' alt='' />
                                                                <span>Compare</span></a></li>
                                                            <li><a href='#'><img src='img/icon/search.png' alt='' /></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='product__item__text'>
                                                        <h6>Piqué Biker Jacket</h6>
                                                        <a href='#' className='add-cart'>+ Add To Cart</a>
                                                        <div className='rating'>
                                                            <i className='fa fa-star-o'></i>
                                                            <i className='fa fa-star-o'></i>
                                                            <i className='fa fa-star-o'></i>
                                                            <i className='fa fa-star-o'></i>
                                                            <i className='fa fa-star-o'></i>
                                                        </div>
                                                        <h5>$67.24</h5>
                                                        <div className='product__color__select'>
                                                            <label htmlFor='pc-1'>
                                                                <input type='radio' id='pc-1' />
                                                            </label>
                                                            <label className='active black' htmlFor='pc-2'>
                                                                <input type='radio' id='pc-2' />
                                                            </label>
                                                            <label className='grey' htmlFor='pc-3'>
                                                                <input type='radio' id='pc-3' />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-md-6 col-sm-6 col-sm-6'>
                                                <div className='product__item'>
                                                    <div className='product__item__pic set-bg'
                                                         data-setbg='img/product/product-1.jpg'>
                                                        <span className='label'>New</span>
                                                        <ul className='product__hover'>
                                                            <li><a href='#'><img src='img/icon/heart.png' alt='' /></a>
                                                            </li>
                                                            <li><a href='#'><img src='img/icon/compare.png' alt='' />
                                                                <span>Compare</span></a></li>
                                                            <li><a href='#'><img src='img/icon/search.png' alt='' /></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='product__item__text'>
                                                        <h6>Piqué Biker Jacket</h6>
                                                        <a href='#' className='add-cart'>+ Add To Cart</a>
                                                        <div className='rating'>
                                                            <i className='fa fa-star-o'></i>
                                                            <i className='fa fa-star-o'></i>
                                                            <i className='fa fa-star-o'></i>
                                                            <i className='fa fa-star-o'></i>
                                                            <i className='fa fa-star-o'></i>
                                                        </div>
                                                        <h5>$67.24</h5>
                                                        <div className='product__color__select'>
                                                            <label htmlFor='pc-1'>
                                                                <input type='radio' id='pc-1' />
                                                            </label>
                                                            <label className='active black' htmlFor='pc-2'>
                                                                <input type='radio' id='pc-2' />
                                                            </label>
                                                            <label className='grey' htmlFor='pc-3'>
                                                                <input type='radio' id='pc-3' />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-md-6 col-sm-6 col-sm-6'>
                                                <div className='product__item'>
                                                    <div className='product__item__pic set-bg'
                                                         data-setbg='img/product/product-1.jpg'>
                                                        <span className='label'>New</span>
                                                        <ul className='product__hover'>
                                                            <li><a href='#'><img src='img/icon/heart.png' alt='' /></a>
                                                            </li>
                                                            <li><a href='#'><img src='img/icon/compare.png' alt='' />
                                                                <span>Compare</span></a></li>
                                                            <li><a href='#'><img src='img/icon/search.png' alt='' /></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='product__item__text'>
                                                        <h6>Piqué Biker Jacket</h6>
                                                        <a href='#' className='add-cart'>+ Add To Cart</a>
                                                        <div className='rating'>
                                                            <i className='fa fa-star-o'></i>
                                                            <i className='fa fa-star-o'></i>
                                                            <i className='fa fa-star-o'></i>
                                                            <i className='fa fa-star-o'></i>
                                                            <i className='fa fa-star-o'></i>
                                                        </div>
                                                        <h5>$67.24</h5>
                                                        <div className='product__color__select'>
                                                            <label htmlFor='pc-1'>
                                                                <input type='radio' id='pc-1' />
                                                            </label>
                                                            <label className='active black' htmlFor='pc-2'>
                                                                <input type='radio' id='pc-2' />
                                                            </label>
                                                            <label className='grey' htmlFor='pc-3'>
                                                                <input type='radio' id='pc-3' />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-md-6 col-sm-6 col-sm-6'>
                                                <div className='product__item'>
                                                    <div className='product__item__pic set-bg'
                                                         data-setbg='img/product/product-1.jpg'>
                                                        <span className='label'>New</span>
                                                        <ul className='product__hover'>
                                                            <li><a href='#'><img src='/img/icon/heart.png' alt='' /></a>
                                                            </li>
                                                            <li><a href='#'><img src='/img/icon/compare.png' alt='' />
                                                                <span>Compare</span></a></li>
                                                            <li><a href='#'><img src='/img/icon/search.png' alt='' /></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='product__item__text'>
                                                        <h6>Piqué Biker Jacket</h6>
                                                        <a href='#' className='add-cart'>+ Add To Cart</a>
                                                        <div className='rating'>
                                                            <i className='fa fa-star-o'></i>
                                                            <i className='fa fa-star-o'></i>
                                                            <i className='fa fa-star-o'></i>
                                                            <i className='fa fa-star-o'></i>
                                                            <i className='fa fa-star-o'></i>
                                                        </div>
                                                        <h5>$67.24</h5>
                                                        <div className='product__color__select'>
                                                            <label htmlFor='pc-1'>
                                                                <input type='radio' id='pc-1' />
                                                            </label>
                                                            <label className='active black' htmlFor='pc-2'>
                                                                <input type='radio' id='pc-2' />
                                                            </label>
                                                            <label className='grey' htmlFor='pc-3'>
                                                                <input type='radio' id='pc-3' />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </section>
                                {/* <!-- Related Section End --> */}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export async function getServerSideProps(params) {
    // console.log(params);
    // Call an external API endpoint to get posts


    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {},
    };
}
