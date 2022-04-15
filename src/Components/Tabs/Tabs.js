import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Tabs = () => {
    return (
        <div className='my-4'>
            <div className=''>
                <div className='flex p-2 justify-center text-red-500 font-semibold'>
                    <CustomLink className={'mx-2'} to={'/breakfast'}>Breakfast</CustomLink>
                    <CustomLink className={'mx-2'} to={'/lunch'}>Lunch</CustomLink>
                    <CustomLink className={'mx-2'} to={'/dinner'}>Dinner</CustomLink>
                </div>

                <Outlet />
            </div>
        </div>

    );
};

export default Tabs;
