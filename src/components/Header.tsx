'use client'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import icon from '@/assets/icon.ico'
import MenuButton from './buttons/MenuButton'

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>(null)

  useGSAP(() => {
    tl.current = gsap.timeline({paused: true})
    .to(".container1", {
      height: "45vh"
    }, 0)
  })

  useEffect(() => {
    if (!isMenuOpen) {
      tl.current?.play()
    } else {
      tl.current?.reverse()
    }
  }, [isMenuOpen])

  return (
    <header 
    ref={container}
    className="container1 px-6 block sm:flex justify-between items-center border-b-1 h-12 overflow-hidden">
      <div className='flex justify-between'>
        <Image src={icon} alt="Logo" className="logo size-12" />
        <MenuButton isOpen={isMenuOpen} setOpen={setMenuOpen}></MenuButton>
      </div>
      <nav className="">
        <ul className="flex flex-col sm:flex-row gap-4 place-items-end">
          <li><a href="#" className="hover:underline">MENU</a></li>
          <li><a href="#" className="hover:underline">LOCATIONS</a></li>
          <li><a href="#" className="hover:underline">ABOUT US</a></li>
          <li><a href="#" className="hover:underline">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  )
}
