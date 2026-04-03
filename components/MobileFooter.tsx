'use client'

import React from 'react'
import Icon from "feather-icons-react";
import {useActiveSection} from "@/components/IntersectionObserver";
import {NAV_ITEMS} from "@/lib/constants";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MobileFooter = () => {
    const activeId = useActiveSection(NAV_ITEMS.map(item => item.href.replace("#", "")))
    return (
        <div className='sm:hidden flex sticky bottom-0 z-50'>
            <div className='main w-full h-12 bottom-footer'>
                <ul className='flex flex-row justify-between'>
                    {NAV_ITEMS.map(({href, icon}) => {
                        const id = href.replace("#", "");
                        const isActive = activeId === id;
                        return (
                            <li key={href}>
                                <Link href={href}
                                      className={`hover:text-blue-300 text-gray-500 p-4 text-xs transition-colors ${isActive ? 'primary border-b-2 border-blue-600' : ''}`}>
                                    <FontAwesomeIcon icon={icon} className='text-sm'/>
                                </Link>
                            </li>
                        )})}
                </ul>
            </div>
        </div>
    )
}
export default MobileFooter
