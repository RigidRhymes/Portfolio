import React from 'react'
import NavtItems from "@/components/ NavtItems";
import UserDropDown from './UserDropDown';
import Image from 'next/image';
import corp from "../assets/corporate.png"

const Header = () => {
    return (
        <div className='mt-4 items-center sticky top-0 z-50 main px-6 overflow-hidden'>
            <div className='justify-between w-full flex flex-row'>
                <div className='flex gap-2 items-center'>
                    <div className='sm:hidden flex'>
                        <UserDropDown />
                    </div>
                <div className='primary'>Emmanuel Aka</div>
                </div>
                 <nav className='hidden sm:block'>
                    <NavtItems />
                </nav>
                <div className='flex sm:hidden'>
                    <Image src={corp} alt='profile-photo' width={32} height={32} className='rounded-full ' />
                </div>
                <div className='hidden sm:block'>
                    <a href='/emmanuelAka-cv.pdf' className='bgColor cursor-pointer p-1 rounded-md text-xs items-center justify-center text-black'>Download CV</a>
                </div>
            </div>
        </div>
    )
}
export default Header
