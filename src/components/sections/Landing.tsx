import React from 'react'
import LinkButton from '../buttons/LinkButton'
import Image from 'next/image'
export const Landing = () => {
  return (
    <section className='flex flex-col gap-4 px-6 md:px-12 lg:px-32 2xl:px-110  h-screen py-8'>
      <div className='relative border-8 lg:w-3/4'>
        <div className='relative text-7xl sm:text-8xl text-center font-bold z-10'>
            <h1 className=''>PRFCT</h1>
            <h1 className=''>RATIO</h1>
        </div>
      </div>
      <div className='relative h-40 lg:h-16 overflow-hidden lg:overflow-visible'>
        <Image 
          className='absolute left-0 -top-38 lg:left-auto lg:right-0' 
          alt='image1' 
          src={"/image1.webp"} 
          width={320} 
          height={200} 
          priority
        />
      </div>
      <h1 className='lg:w-1/2'>We’re more than coffee — we’re a gathering place for friends, creators, and dreamers.</h1>
      <div className='flex flex-col w-full gap-2 sm:flex-row sm:w-3/4 lg:w-1/3'>
        <LinkButton reverse={false} val="Find Us" ></LinkButton>
        <LinkButton val='More About Us'></LinkButton>
      </div>
    </section>  
  )
}
