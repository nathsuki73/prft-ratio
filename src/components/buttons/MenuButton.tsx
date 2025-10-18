'use client'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

const MenuButton = () => {
  const [isOpen, setOpen] = useState(true)
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>(null)

  useGSAP(() => {
    tl.current = gsap.timeline({paused: true})
    .to(".bar1", {
      duration: 0.2,
      y: 10,
      ease: "none"
    }, 0)
    .to(".bar2", {
      duration: 0.2,
      y: -10,
      ease: "none"
    }, 0)
  }, {scope: container})
  
  const handleClick = () => {
    setOpen(!isOpen)
    if (isOpen) {
      tl.current?.play()
    } else {
      tl.current?.reverse() 
    }
  }
  return (
    <>
        <div
        onClick={() => handleClick()} 
        ref={container}
        className={`flex flex-col justify-center items-end w-10 gap-2 h-10 overflow-hidden cursor-pointer`}>
            <span className={`bar1 h-[2px] w-full transition-all bg-black duration-500 ease-in-out`}></span>
            <span className={`bar2 h-[2px] w-full transition-all bg-black duration-500 ease-in-out`}></span>
        </div>
        
    </>
  )
}

export default MenuButton