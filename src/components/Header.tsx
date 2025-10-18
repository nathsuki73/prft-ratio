'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import icon from '@/assets/icon.ico'
import MenuButton from './buttons/MenuButton'

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);

  return (
    <header className="px-6 flex justify-between items-center border-b-1">
      <Image src={icon} alt="Logo" className="size-12" />
      <nav className="hidden sm:block">
        <ul className="flex gap-4">
          <li><a href="#" className="hover:underline">MENU</a></li>
          <li><a href="#" className="hover:underline">LOCATIONS</a></li>
          <li><a href="#" className="hover:underline">ABOUT US</a></li>
          <li><a href="#" className="hover:underline">CONTACT</a></li>
        </ul>
      </nav>
      <MenuButton isOpen={isMenuOpen} setOpen={setMenuOpen}></MenuButton>
    </header>
  )
}
