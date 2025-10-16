import Image from 'next/image'
import React from 'react'
import icon from '@/assets/icon.ico'
export const Header = () => {
  return (
    <header className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <Image src={icon} alt="Logo" className="w-6 h-6" />
      <nav className="flex gap-4">
        <a href="#" className="hover:underline">MENU</a>
        <a href="#" className="hover:underline">LOCATIONS</a>
        <a href="#" className="hover:underline">ABOUT US</a>
        <a href="#" className="hover:underline">CONTACT</a>
      </nav>
    </header>
  )
}
