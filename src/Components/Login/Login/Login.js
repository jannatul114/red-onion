import React from 'react';
import auth from '../../../firebase.init';
import background from '../../../images/images/bannerbackground.png';
import logo from '../../../images/images/logo2.png';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import Footer from '../../Footer/Footer';
const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorElement;
    let from = location.state?.from?.pathname || "/";
    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        <Loading></Loading>
    }

    if (error) {
        errorElement = (
            <p>Error: {error.message}</p>
        )
    }
    return (
        <div>
            <div className="w-full bg-center bg-cover h-screen " style={{ backgroundImage: `url(${background})` }}>
                <div className='pt-28'>
                    <div className='flex justify-center'>
                        <img className='mt-3' style={{ height: '50px' }} src={logo} alt="" />

                    </div>
                    <div className='flex justify-center items-center w-full'>
                        <form onSubmit={handleSubmit} className='my-5'>
                            <input placeholder='Email' className='p-2 my-3 bg-gray-300 px-5' type="email" name='email' />
                            <br />
                            <input className='bg-gray-300 p-2 px-5' placeholder='Password' type="password" name='password' />
                            <br />
                            <input className='w-full bg-red-500 p-2 rounded-2 text-white text-bold mt-3' type="submit" value="Login" />

                        </form>
                    </div>
                    <p className='text-red-600 text-center'>{errorElement}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;