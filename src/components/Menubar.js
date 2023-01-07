import React from 'react';
import './menu.css'
const Menubar = () => {
    return (
        <div className='bg-green-500 h-[60px] flex justify-between px-[40px] items-center'>
            <h1 className='text-white text-3xl fnt-bold'>I-Service</h1>
            <div className='menu-link'>
                <span className='text-white py-2 text-[18px] px-4 mr-[5px] '>Home</span>
                <span className='text-white py-2 text-[18px] px-4 mr-[5px] '>Service</span>
                <span className='text-white py-2 text-[18px] px-4 mr-[5px] '>Review</span>
                <span className='text-white py-2 text-[18px] px-4 mr-[5px] '>Blog</span>
                <span className='text-white py-2 text-[18px] px-4 mr-[5px] '>Faq</span>
                <span className='text-white py-2 text-[18px] px-4 mr-[5px] '>LogIn</span>
            </div>
        </div>
    );
};

export default Menubar;