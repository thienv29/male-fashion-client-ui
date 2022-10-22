import Layout from '../components/layout';

export default function HistoryOrder() {
    return (
        <Layout>
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Order history</h4>
                                <div className="breadcrumb__links">
                                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                    <a href="/">Home</a>
                                    <span>Order history</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shop spad">
                <div className="container">
                    <table id="history_table" className="table hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#000154</td>
                                <td>3</td>
                                <td>100$</td>
                                <td>Success</td>
                                <td>12:33 2022/10/10</td>
                                <td><a href='/history-order-detail'>Detail</a></td>
                            </tr>
                            <tr>
                                <td>#000110</td>
                                <td>2</td>
                                <td>1200$</td>
                                <td>Success</td>
                                <td>15:19 2022/10/05</td>
                                <td><a href='/history-order-detail'>Detail</a></td>
                            </tr>
                            <tr>
                                <td>#000109</td>
                                <td>2</td>
                                <td>1200$</td>
                                <td>Cancel</td>
                                <td>15:00 2022/10/05</td>
                                <td><a href='/history-order-detail'>Detail</a></td>
                            </tr>
                            <tr>
                                <td>#000062</td>
                                <td>1</td>
                                <td>50$</td>
                                <td>Success</td>
                                <td>02:52 2022/10/01</td>
                                <td><a href='/history-order-detail'>Detail</a></td>
                            </tr>
                            <tr>
                                <td>#000032</td>
                                <td>10</td>
                                <td>1340$</td>
                                <td>Success</td>
                                <td>20:11 2022/09/25</td>
                                <td><a href='/history-order-detail'>Detail</a></td>
                            </tr>
                            <tr>
                                <td>#000013</td>
                                <td>7</td>
                                <td>714$</td>
                                <td>Success</td>
                                <td>17:02 2022/09/21</td>
                                <td><a href='/history-order-detail'>Detail</a></td>
                            </tr>
                        </tbody>
                    </table>
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
