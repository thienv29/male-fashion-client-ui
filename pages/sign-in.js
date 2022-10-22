export default function Signin() {
    return (

        <>
            <div className='body-login'>

                <div className='limiter'>
                    <div className='container-login100'>
                        <div className='wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54'>
                            <form className='login100-form validate-form'>
                                <div className='header__logo flex-center mb-4'>
                                    <a href='/'><img src='img/logo.png' alt='' /></a>
                                </div>
                                <h4 className='title-auth'>Sign in</h4>

                                <div className='wrap-input100 validate-input m-b-23'
                                     data-validate='Username is reauired'>
                                    <span className='label-input100'>Username</span>
                                    <input className='input100' type='text' name='username'
                                           placeholder='Type your username' />
                                    <span className='focus-input100' />
                                </div>

                                <div className='wrap-input100 validate-input' data-validate='Password is required'>
                                    <span className='label-input100'>Password</span>
                                    <input className='input100' type='password' name='pass'
                                           placeholder='Type your password' />
                                    <span className='focus-input100' />
                                </div>

                                <div className='text-right p-t-8 p-b-31'>
                                    <a href='forget-pass' className='a-login'>
                                        Forgot password?
                                    </a>
                                </div>

                                <div className='container-login100-form-btn'>
                                    <a href='#' class='primary-btn w-100 text-center'>Sign in</a>
                                </div>

                                <div className='txt1 text-center p-t-54 p-b-20'>
                                <span>
                                    Or Sign Up Using
                                </span>
                                </div>

                                <div className='flex-c-m'>
                                    <a href='#' className='login100-social-item bg1 a-login'>
                                        <i className='fa fa-facebook' />
                                    </a>

                                    <a href='#' className='login100-social-item bg2 a-login'>
                                        <i className='fa fa-twitter' />
                                    </a>

                                    <a href='#' className='login100-social-item bg3 a-login'>
                                        <i className='fa fa-google' />
                                    </a>
                                </div>

                                <div className='flex-col-c mt-4'>

                                    <a href='sign-up' className='txt2 a-login'>
                                        Sign Up
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
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
