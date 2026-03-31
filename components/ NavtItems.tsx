'use client'

import React from 'react'
import {usePathname} from "next/navigation";
import {NAV_ITEMS} from "@/lib/constants";
import Link from "next/link";

const NavtItems = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if(path === '/') return pathname === '/'

        return pathname.startsWith(path)
    }

    return (
        <ul className='flex flex-col sm:flex-row p-2 sm:gap-6 gap-2 font-normal text-xs text-blue-100'>
            {NAV_ITEMS.map(({href, label}) => (
                <li key={href}>
                    <Link href={href} className={`hover:text-blue-300 transition-colors ${isActive(href) ? 'primary' : ''}`}>
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default NavtItems
