import CategoryService from '../services/category.service';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AuthService from '../services/auth.service';
import { useDispatch } from 'react-redux';
import { resetUserState, setUserLogin } from '../store/feature/UserSlice';
import { useRouter } from 'next/router';

export default function Signin() {
    const dispatch = useDispatch();
    const router = useRouter();
    const loginHandler = async (values) => {
        const userResponse = await AuthService.login(values);
        dispatch(setUserLogin(userResponse));
        router.push('/');

    };

    return (

        <>
            <div className='body-login'>

                <div className='limiter'>
                    <div className='container-login100'>
                        <div className='wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54'>
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                                    password: Yup.string().max(255).required('Password is required'),
                                })}
                                onSubmit={loginHandler}
                            >
                                {({
                                      errors,
                                      handleBlur,
                                      handleChange,
                                      handleSubmit,
                                      isSubmitting,
                                      touched,
                                      values,
                                  }) => (

                                    <form className='login100-form validate-form' noValidate
                                          onSubmit={handleSubmit}>
                                        <div className='header__logo flex-center mb-4'>
                                            <a href='/'><img src='img/logo.png' alt='' /></a>
                                        </div>
                                        <h4 className='title-auth'>Sign in</h4>

                                        <div className='wrap-input100 validate-input m-b-23'
                                             data-validate='Email is reauired'>
                                            <span className='label-input100'>Email</span>
                                            <input className='input100' type='text' name='email' value={values.email}
                                                   onChange={handleChange}
                                                   placeholder='Type your email' />
                                            <span className='focus-input100' />
                                        </div>

                                        <div className='wrap-input100 validate-input'
                                             data-validate='Password is required'>
                                            <span className='label-input100'>Password</span>
                                            <input className='input100' type='password' name='password'
                                                   value={values.password}
                                                   onChange={handleChange}
                                                   placeholder='Type your password' />
                                            <span className='focus-input100' />
                                        </div>

                                        <div className='text-right p-t-8 p-b-31'>
                                            <a href='forget-pass' className='a-login'>
                                                Forgot password?
                                            </a>
                                        </div>

                                        <div className='container-login100-form-btn mb-3'>
                                            <button className='primary-btn w-100 text-center' type={'submit'}>Sign in
                                            </button>
                                        </div>

                                        <div className='container-login100-form-btn'>
                                            <a className='secondary-btn w-100 text-center'
                                                   href={'/sign-up'}> Register
                                            </a>
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
                                )}
                            </Formik>
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
