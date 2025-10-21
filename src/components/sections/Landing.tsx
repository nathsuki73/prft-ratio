import React from 'react'
import LinkButton from '../buttons/LinkButton'
import Image from 'next/image'
export const Landing = () => {
  return (
    <section className='flex flex-col gap-4 px-6 h-screen py-4'>
      <div className='relative border-8 '>
        <div className='relative text-7xl text-center font-bold z-10'>
            <h1 className=''>PRFCT</h1>
            <h1 className=''>RATIO</h1>
        </div>
      </div>
      <div className='relative h-40 overflow-hidden'>
        <Image className='absolute left-0 -top-38' alt='image1' src={"/image1.png" } width={320} height={200}></Image>

      </div>
      <h1 className=''>We’re more than coffee — we’re a gathering place for friends, creators, and dreamers.</h1>
      <LinkButton reverse={false} val="Find Us" ></LinkButton>
      <LinkButton val='More About Us'></LinkButton>
    </section>
  )
}
