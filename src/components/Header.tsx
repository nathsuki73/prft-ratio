import Image from 'next/image'
import React from 'react'
import icon from '@/assets/icon.ico'
import MenuButton from './buttons/MenuButton'
export const Header = () => {
  return (
    <header className="px-6 flex justify-between items-center border-b-1">
      <Image src={icon} alt="Logo" className="size-12" />
      <MenuButton></MenuButton>
      <nav className="flex gap-4 hidden">
        <a href="#" className="hover:underline">MENU</a>
        <a href="#" className="hover:underline">LOCATIONS</a>
        <a href="#" className="hover:underline">ABOUT US</a>
        <a href="#" className="hover:underline">CONTACT</a>
      </nav>
    </header>
  )
}
