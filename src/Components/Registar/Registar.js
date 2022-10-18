import React from 'react';
import logo from '../../images/images/logo2.png';
import background from '../../images/images/bannerbackground.png';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
const Registar = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    let errorHandle;


    const handleRegistar = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        if (user) {
            navigate('/');
        }
    }
    if (error) {
        errorHandle = (
            <p>{error?.message}</p>
        )
    }
    console.log(user);
    return (
        <div>
            <div className="w-full bg-center bg-cover h-screen " style={{ backgroundImage: `url(${background})` }}>
                <div className='pt-28'>
                    <div className='flex justify-center'>
                        <img className='mt-3' style={{ height: '50px' }} src={logo} alt="" />

                    </div>
                    <div className='flex justify-center items-center w-full'>
                        <form onSubmit={handleRegistar} className='my-5'>
                            <input placeholder='Name' className='p-2 my-3 bg-gray-300 px-5' type="text" name='name' />
                            <br />
                            <input placeholder='Email' className='p-2 my-3 bg-gray-300 px-5' type="email" name='email' required />
                            <br />
                            <input className='bg-gray-300 p-2 px-5' placeholder='Password' type="password" name='password' required />
                            <br />
                            <input className='w-full bg-red-500 p-2 rounded-2 text-white text-bold mt-3' type="submit" value="Registar" />
                        </form>
                    </div>
                    <p className='text-center'>{errorHandle}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Registar;