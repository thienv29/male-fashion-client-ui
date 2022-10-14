//image, name, rating, price

export default function Product({product}) {
    const {image, name, star, exportPrice, salePrice} = product
    return (
        <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='product__item sale'>
                <div className='product__item__pic set-bg'
                    data-setbg={image}>
                    {salePrice > 0 ? <span className='label'>Sale</span> : ''}
                    <ul className='product__hover'>
                        <li><a href='#'><img src='img/icon/heart.png' alt='' /></a></li>
                    </ul>
                </div>
                <div className='product__item__text'>
                    <h6>{name}</h6>
                    <a href='#' className='add-cart'>+ Add To Cart</a>
                    <div className='rating'>
                        <i className={1 <= star ? 'fa fa-star' :  'fa fa-star-o'}></i>
                        <i className={2 <= star ? 'fa fa-star' :  'fa fa-star-o'}></i>
                        <i className={3 <= star ? 'fa fa-star' :  'fa fa-star-o'}></i>
                        <i className={4 <= star ? 'fa fa-star' :  'fa fa-star-o'}></i>
                        <i className={5 <= star ? 'fa fa-star' :  'fa fa-star-o'}></i>
                    </div>
                    <h5>${salePrice > 0 ? salePrice : exportPrice}</h5>
                </div>
            </div>
        </div>
    )
}