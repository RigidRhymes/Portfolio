'use client'

import React from 'react'
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuLabel } from './ui/dropdown-menu'
import { Button } from './ui/button'
import Icon from "feather-icons-react"
import NavtItems from './ NavtItems'

const UserDropDown = () => {
  return (
  <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant='ghost' >
        <Icon icon="menu" className='primary w-6 h-6' />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='primary'>
    <DropdownMenuLabel className='neutral'>
        <nav>
            <NavtItems />
        </nav>
    </DropdownMenuLabel>
  </DropdownMenuContent>
   </DropdownMenu>
  )
}

export default UserDropDown
