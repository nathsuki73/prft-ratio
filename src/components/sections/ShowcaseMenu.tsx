import React from 'react'
import Image from 'next/image'
import LinkButton from '../buttons/LinkButton'

export const ShowcaseMenu = () => {
  return (
    <section className='flex flex-col gap-4 px-6 md:px-12 lg:px-32 2xl:px-110 py-16 bg-[#3C2A21] text-white'>
        <h1 className='text-6xl sm:text-8xl font-bold'>Explore<br />the Menu</h1>
        <div  className='flex flex-col gap-8'>
            
            <Description img='/espresso.webp' head='Espresso, Latte & Frappe' body='“From bold espresso shots to creamy lattes and ice-blended frappes — every cup is crafted to energize your day.”'></Description>
            <Description img='/pasta.webp' head='Creamy, Dreamy Pasta' body='“Rich sauces, perfectly cooked noodles, and flavors that warm your soul.”'></Description>
            <Description img='/burger.webp' head='Irresistible Burgers' body='“Juicy, cheesy, and packed with bold flavor — every bite hits just right.”'></Description>
        </div>
    </section>
  )
}

type DescriptionProps = {
    head: string,
    body: string,
    img: string
}

const Description = ({head, body, img}: DescriptionProps) => {
    return (
    <div className='flex flex-col sm:flex-row py-4 gap-4'>
        <div className='relative sm:w-5/12 overflow-hidden h-80'>
            <Image 
                className='absolute -top-16' 
                alt='image1' 
                src={img} 
                width={500}
                height={300}
                style={{ width: "100%", height: "auto" }}
                />
        </div>
        <div className='flex flex-col sm:w-1/2 gap-8  h-80 justify-between'>
            <h1 className='text-6xl font-bold'>{head}</h1>
            <h1>{body}</h1>
            <div className='w-1/2 justify-end'>
                <LinkButton val='See Full Menu' reverse={false}></LinkButton>
            </div>
        </div>
    </div>
    )
}
