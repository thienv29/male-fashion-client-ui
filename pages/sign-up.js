import Footer from '../components/layout/Footer';
export default function Signup() {
    return (

        <><body class="body-login">

            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                        <form class="login100-form validate-form">
                            <span class="login100-form-title p-b-49">
                                Sign up
                            </span>

                            <div class="wrap-input100 validate-input m-b-23" data-validate="Username is required">
                                <span class="label-input100">Username</span>
                                <input class="input100" type="text" name="username" placeholder="Type your username"></input>
                                <span class="focus-input100"></span>
                            </div>

                            <div class="wrap-input100 validate-input m-b-23" data-validate="Email is required">
                                <span class="label-input100">Email</span>
                                <input class="input100" type="text" name="email" placeholder="Type your email"></input>
                                <span class="focus-input100"></span>
                            </div>

                            <div class="wrap-input100 validate-input m-b-23" data-validate="Phone number is required">
                                <span class="label-input100">Phone</span>
                                <input class="input100" type="text" name="phone" placeholder="Type your phone number"></input>
                                <span class="focus-input100"></span>
                            </div>

                            <div class="wrap-input100 validate-input m-b-23" data-validate="Password is required">
                                <span class="label-input100">Password</span>
                                <input class="input100" type="password" name="pass" placeholder="Type your password"></input>
                                <span class="focus-input100"></span>
                            </div>

                            <div class="wrap-input100 validate-input m-b-23" data-validate="Password is required">
                                <span class="label-input100">Confirm password</span>
                                <input class="input100" type="password" name="repeat-pass" placeholder="Confirm your password"></input>
                                <span class="focus-input100"></span>
                            </div>

                            <div class="container-login100-form-btn">
                                <div class="wrap-login100-form-btn">
                                    <div class="login100-form-bgbtn"></div>
                                    <button class="login100-form-btn button-login">
                                        Sign up
                                    </button>
                                </div>
                            </div>
                            <div class="flex-col-c p-t-65">
                                <a href="sign-in" class="txt2 a-login">
                                    Back to sign in
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