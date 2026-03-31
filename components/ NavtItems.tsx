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
        <ul className='hidden lg:flex flex-row gap-2 font-normal text-xs text-blue-100'>
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
