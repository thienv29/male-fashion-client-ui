import Footer from '../components/layout/Footer';
export default function Signin() {
    return (

        <><body class="body-login">

            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                        <form class="login100-form validate-form">
                            <span class="login100-form-title p-b-49">
                                Sign in
                            </span>

                            <div class="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                                <span class="label-input100">Username</span>
                                <input class="input100" type="text" name="username" placeholder="Type your username"></input>
                                <span class="focus-input100"></span>
                            </div>

                            <div class="wrap-input100 validate-input" data-validate="Password is required">
                                <span class="label-input100">Password</span>
                                <input class="input100" type="password" name="pass" placeholder="Type your password"></input>
                                <span class="focus-input100"></span>
                            </div>

                            <div class="text-right p-t-8 p-b-31">
                                <a href="forget-pass" class="a-login">
                                    Forgot password?
                                </a>
                            </div>

                            <div class="container-login100-form-btn">
                                <div class="wrap-login100-form-btn">
                                    <div class="login100-form-bgbtn"></div>
                                    <button class="login100-form-btn button-login">
                                        Sign in
                                    </button>
                                </div>
                            </div>

                            <div class="txt1 text-center p-t-54 p-b-20">
                                <span>
                                    Or Sign Up Using
                                </span>
                            </div>

                            <div class="flex-c-m">
                                <a href="#" class="login100-social-item bg1 a-login">
                                    <i class="fa fa-facebook"></i>
                                </a>

                                <a href="#" class="login100-social-item bg2 a-login">
                                    <i class="fa fa-twitter"></i>
                                </a>

                                <a href="#" class="login100-social-item bg3 a-login">
                                    <i class="fa fa-google"></i>
                                </a>
                            </div>

                            <div class="flex-col-c p-t-155">
                                <span class="txt1 p-b-17">
                                    Or Sign Up Using
                                </span>

                                <a href="sign-up" class="txt2 a-login">
                                    Sign Up
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </body><Footer /></>
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