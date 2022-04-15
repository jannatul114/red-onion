import React from 'react';
import logo from '../../images/images/logo2.png';
const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img style={{ height: '35px' }} src={logo} alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Login</a></li>
                    <button className="bg-red-500 rounded-full  hover:bg-red-300 py-1 px-4">
                        <p className="font-semibold text-base uppercase text-white">Search</p>
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;