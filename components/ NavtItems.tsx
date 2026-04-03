'use client'

import React from 'react'
import {NAV_ITEMS} from "@/lib/constants";
import Link from "next/link";
import {useActiveSection} from "@/components/IntersectionObserver";

const NavtItems = () => {

    const activeId = useActiveSection(NAV_ITEMS.map(item => item.href.replace("#", "")))

    return (
        <ul className='flex flex-col sm:flex-row p-2 sm:gap-6 gap-2 font-normal text-xs text-blue-100'>
            {NAV_ITEMS.map(({href, label}) => {
             const id = href.replace("#", "");
             const isActive = activeId === id;
                return (
                <li key={href}>
                    <Link href={href}
                          className={`hover:text-blue-300 transition-colors ${isActive ? 'primary border-b-2 border-blue-600' : ''}`}>
                        {label}
                    </Link>
                </li>
            )})}
        </ul>
    )
}
export default NavtItems
