import React from 'react'
import Image from 'next/image'
import icon from '@/assets/icon.ico'
import Link from 'next/link'
import { LiaFacebookSquare } from "react-icons/lia";


const Footer = () => {
  return (
    <section className='w-screen bg-[#3C2A21] text-[#D5CEA3] flex flex-col text-center sm:text-start sm:flex-row sm:justify-between gap-8 px-6 md:px-12 lg:px-32 2xl:px-110 py-8 items-center sm:items-start'>
        <div className='flex flex-col w-4/6 gap-2 sm:max-w-xs items-center sm:items-start '>
            <Image priority src={icon} alt="Logo" className="logo size-12" />
            <h1>We proudly serve one of the best coffees in Laguna — freshly brewed, always perfect.</h1>
            <Link href="" className='' style={{color: "#D5CEA3"}}><LiaFacebookSquare /></Link>
        </div>
        <div className='flex flex-col w-5/6 sm:flex-row sm:max-w-2xs gap-8 '>
            <div className='flex flex-col gap-3'>
                <h1 className='font-bold'>LINKS</h1>
                <ul>
                    <li><a href="#" className="hover:underline">MENU</a></li>
                    <li><a href="#" className="hover:underline">LOCATIONS</a></li>
                    <li><a href="#" className="hover:underline">ABOUT US</a></li>
                    <li><a href="#" className="hover:underline">CONTACT</a></li>
                </ul>
            </div>
            <div className='flex flex-col gap-3 sm:w-3/5'>
                <h1 className='font-bold'>CONTACTS</h1>
                <ul>
                    <li>Phoenix Gas Station Maharlika Highway Brgy.Calihan 4000 San Pablo City, Philippines</li>
                    <li>sample@prft.com</li>
                    <li>123-073</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer