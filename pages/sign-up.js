export default function Signup() {
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
                                <h4 className='title-auth'>Sign up</h4>

                                <div className='wrap-input100 validate-input m-b-23'
                                     data-validate='Username is required'>
                                    <span className='label-input100'>Username</span>
                                    <input className='input100' type='text' name='username'
                                           placeholder='Type your username'></input>
                                    <span className='focus-input100'></span>
                                </div>

                                <div className='wrap-input100 validate-input m-b-23' data-validate='Email is required'>
                                    <span className='label-input100'>Email</span>
                                    <input className='input100' type='text' name='email'
                                           placeholder='Type your email'></input>
                                    <span className='focus-input100'></span>
                                </div>

                                <div className='wrap-input100 validate-input m-b-23'
                                     data-validate='Phone number is required'>
                                    <span className='label-input100'>Phone</span>
                                    <input className='input100' type='text' name='phone'
                                           placeholder='Type your phone number'></input>
                                    <span className='focus-input100'></span>
                                </div>

                                <div className='wrap-input100 validate-input m-b-23'
                                     data-validate='Password is required'>
                                    <span className='label-input100'>Password</span>
                                    <input className='input100' type='password' name='pass'
                                           placeholder='Type your password'></input>
                                    <span className='focus-input100'></span>
                                </div>

                                <div className='wrap-input100 validate-input m-b-23'
                                     data-validate='Password is required'>
                                    <span className='label-input100'>Confirm password</span>
                                    <input className='input100' type='password' name='repeat-pass'
                                           placeholder='Confirm your password'></input>
                                    <span className='focus-input100'></span>
                                </div>
                                <div className='container-login100-form-btn'>
                                    <a href='#' className='primary-btn w-100 text-center'>Sign up</a>
                                </div>
                                <div className='flex-col-c p-t-65'>
                                    <a href='sign-in' className='txt2 a-login'>
                                        Back to sign in
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
