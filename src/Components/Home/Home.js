import React from 'react';
import background from '../../images/images/bannerbackground.png'
import Footer from '../Footer/Footer';
import Tabs from '../Tabs/Tabs';

const Home = () => {
    return (
        <div>
            <div className="w-full bg-center bg-cover h-96" style={{ backgroundImage: `url(${background})` }}>
                <div className="flex items-center justify-center w-full h-full bg-opacity-50">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
                        <div>
                            <h1 className='my-5 text-4xl text-black text-center'>Best food waiting for your belly</h1>
                            <div className=" rounded-full bg-white shadow flex w-100">
                                <input
                                    type="text"
                                    placeholder="Search food"
                                    className="w-full rounded-tl-full rounded-bl-full py-2 px-4" />
                                <button className="bg-red-500 rounded-tr-full rounded-br-full hover:bg-red-300 py-2 px-4">
                                    <p className="font-semibold text-base uppercase text-white">Search</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Tabs></Tabs>
            <Footer></Footer>

        </div>

    );
};

export default Home;