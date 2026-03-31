import React from 'react'
import NavtItems from "@/components/ NavtItems";

const Header = () => {
    return (
        <div className='mt-4 items-center '>
            <div className='justify-between w-full flex flex-row'>
                <div className='primary'>Emmanuel Aka</div>
                <nav className='hidden sm:block'>
                    <NavtItems />
                </nav>
                <button className='bgColor cursor-pointer p-1 rounded-md text-xs items-center justify-center text-black'>Download CV</button>
            </div>
        </div>
    )
}
export default Header
