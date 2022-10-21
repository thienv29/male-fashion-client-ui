import Layout from '../components/layout';

export default function HistoryOrderDetail() {
    return (
        <Layout>
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Order detail</h4>
                                <div className="breadcrumb__links">
                                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                    <a href="/history-order">Order history</a>
                                    <span>Detail</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shop spad">
                <div className="container-fluid ">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center py-3">
                            <h2 className="h5 mb-0">
                                <a href="#" className="text-muted order-detail-link "></a> Order
                                #16123222
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card-order-detail-tracking mb-4">
                                    <div className="card-body">
                                        <div className="mb-3 d-flex justify-content-between">
                                            <div>
                                                <span className="me-3">22-11-2021</span>
                                                <span className="me-3">#16123222</span>
                                                <span className="badge rounded-pill bg-info">
                                                    SHIPPING
                                                </span>
                                            </div>
                                        </div>
                                        <div className="tracking-card">
                                            <div className="row d-flex justify-content-center">
                                                <div className="col-12">
                                                    <ul id="progressbar" className="text-center">
                                                        <li className="active step0"></li>
                                                        <li className="active step0"></li>
                                                        <li className="active step0"></li>
                                                        <li className="step0"></li>
                                                        <li className="step0"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row justify-content-between top">
                                                <div className="row d-flex icon-content">
                                                    <img
                                                        className="icon"
                                                        src="img\order-status\pending.png"
                                                    ></img>
                                                    <div className="d-flex flex-column order-status">
                                                        <p className="font-weight-bold">
                                                            Pending
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row d-flex icon-content">
                                                    <img
                                                        className="icon"
                                                        src="img\order-status\confirmed.png"
                                                    ></img>
                                                    <div className="d-flex flex-column order-status">
                                                        <p className="font-weight-bold">
                                                            Confirmed
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row d-flex icon-content">
                                                    <img
                                                        className="icon"
                                                        src="img\order-status\delivering.png"
                                                    ></img>
                                                    <div className="d-flex flex-column order-status">
                                                        <p className="font-weight-bold">
                                                            Delivering
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row d-flex icon-content">
                                                    <img
                                                        className="icon"
                                                        src="img\order-status\delivered.png"
                                                    ></img>
                                                    <div className="d-flex flex-column order-status">
                                                        <p className="font-weight-bold">
                                                            Delivered
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row d-flex icon-content">
                                                    <img
                                                        className="icon"
                                                        src="img\order-status\complete.png"
                                                    ></img>
                                                    <div className="d-flex flex-column order-status">
                                                        <p className="font-weight-bold">
                                                            Complete
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="card-order-detail mb-4">
                                    <div className="card-body">
                                        <table className="table table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex mb-2">
                                                            <div className="flex-shrink-0">
                                                                <img
                                                                    src="https://via.placeholder.com/280x280/87CEFA/000000"
                                                                    alt=""
                                                                    width="35"
                                                                    className="img-fluid"
                                                                ></img>
                                                            </div>
                                                            <div className="flex-lg-grow-1 ms-3">
                                                                <h6 className="small mb-0">
                                                                    <a
                                                                        href="#"
                                                                        className="text-reset"
                                                                    >
                                                                        Gucci T-Shirt
                                                                    </a>
                                                                </h6>
                                                                <span className="small">
                                                                    Color: Black - Size: L
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>1</td>
                                                    <td className="text-end">$79.99</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex mb-2">
                                                            <div className="flex-shrink-0">
                                                                <img
                                                                    src="https://via.placeholder.com/280x280/FF69B4/000000"
                                                                    alt=""
                                                                    width="35"
                                                                    className="img-fluid"
                                                                ></img>
                                                            </div>
                                                            <div className="flex-lg-grow-1 ms-3">
                                                                <h6 className="small mb-0">
                                                                    <a
                                                                        href="#"
                                                                        className="text-reset"
                                                                    >
                                                                        Hoodie LV x Supreme
                                                                    </a>
                                                                </h6>
                                                                <span className="small">
                                                                    Color: Red - Size: L
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>1</td>
                                                    <td className="text-end">$79.99</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td colspan="2">Subtotal</td>
                                                    <td className="text-end">$159,98</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">Shipping</td>
                                                    <td className="text-end">$20.00</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">Discount (Code: NEWYEAR)</td>
                                                    <td className="text-danger text-end">
                                                        -$10.00
                                                    </td>
                                                </tr>
                                                <tr className="fw-bold">
                                                    <td colspan="2">TOTAL</td>
                                                    <td className="text-end">$169,98</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                                <div className="card-order-detail mb-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h3 className="h6">Payment Method</h3>
                                                <p>
                                                    VNPAY -1234 <br></br>
                                                    Total: $169,98{' '}
                                                    <span className="badge bg-success rounded-pill">
                                                        PAID
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="col-lg-6">
                                                <h3 className="h6">Billing address</h3>
                                                <address>
                                                    <strong>Thanh Thien</strong>
                                                    <br></br>
                                                    351 XVNT St, Binh Thanh District<br></br>
                                                    HCM, VN<br></br>
                                                    <span title="Phone">Phone:</span> (84) 336432392
                                                </address>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card-order-detail mb-4">
                                    <div className="card-body">
                                        <h3 className="h6">Customer Notes</h3>
                                        <p>
                                            Sed enim, faucibus litora velit vestibulum habitasse.
                                            Cras lobortis cum sem aliquet mauris rutrum.
                                            Sollicitudin. Morbi, sem tellus vestibulum porttitor.
                                        </p>
                                    </div>
                                </div>
                                <div className="card-order-detail mb-4">
                                    <div className="card-body">
                                        <h3 className="h6">Shipping Information</h3>
                                        <strong>GiaoHangTietKiem </strong>
                                        <span>
                                            <a
                                                href="#"
                                                className="text-decoration-underline"
                                                target="_blank"
                                            >
                                                #FF1234567890
                                            </a>{' '}
                                            <i className="bi bi-box-arrow-up-right"></i>{' '}
                                        </span>
                                        <hr></hr>
                                        <h3 className="h6">Address</h3>
                                        <address>
                                            <strong>Thanh Thien</strong>
                                            <br></br>
                                            351 XVNT St, Binh Thanh District<br></br>
                                            HCM, VN<br></br>
                                            <span title="Phone">Phone:</span> (84) 336432392
                                        </address>
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
