import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../App';
import auth from '../../firebase.init';
import logo from '../../images/images/logo2.png';
import Checkout from '../Checkout/Checkout';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [cart, setCart] = useContext(CartContext)
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth)
    }
    console.log(user);
    const toHome = () => {
        navigate('/home')
    }
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img style={{ height: '35px' }} src={logo} alt="" onClick={toHome} />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <Link to={'/carts'}><label tabindex="0" className="btn btn-ghost btn-circle">
                        {
                            cart.length >= 1 && <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{cart.length}</span>
                            </div>
                        }
                    </label>
                    </Link>
                    <Link className='my-4 mx-3 text-bold text-red-500' to={'/checkout'}>Checkout</Link>

                    {
                        !user ? <Link className='mx-2 mt-4 text-bold text-red-500' to={'/login'}>Login</Link> : <button onClick={handleSignOut} className='mx-3'>Signout</button>
                    }


                    <button className="bg-red-500 rounded-full  hover:bg-red-300 py-1 px-4">
                        <Link to={'/registar'} className="font-semibold text-base uppercase text-white">Registar</Link>
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;