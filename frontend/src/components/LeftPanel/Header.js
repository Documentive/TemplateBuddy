import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function Header() {
    return (
        <div className='w-full h-16 border-blue-800 border-2 flex justify-end items-center px-8'>
            {/* TODO: Need to complete the toggle theme functionality */}
            <p>Toggle Theme</p>
            <div className='flex ml-4'>
                <BsFillSunFill />
                <BsFillMoonFill />
            </div>
        </div>
    )
}

export default Header
