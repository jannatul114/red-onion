import React from 'react';
import logo from '../../images/images/logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-900 text-neutral-content">
                <div>
                    <img style={{ height: '35px' }} src={logo} alt="" />
                </div>
                <div>

                    <p className="link link-hover">About our food</p>
                    <p className="link link-hover">Read our blogs</p>
                    <p className="link link-hover">Signup to deliver</p>
                    <p className="link link-hover">Add your resturent</p>
                </div>
                <div>

                    <p className="link link-hover">Get help</p>
                    <p className="link link-hover">Read FAQs</p>
                    <p className="link link-hover">View All Clients</p>
                    <p className="link link-hover">resturent near me</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;