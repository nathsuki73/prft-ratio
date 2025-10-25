import React from 'react'
import Image from 'next/image'
import LinkButton from '../buttons/LinkButton'

export const ShowcaseMenu = () => {
  return (
    <section className='flex flex-col gap-4 px-6 md:px-12 lg:px-32 2xl:px-110 py-4 bg-[#3C2A21] text-white'>
        <h1 className='text-6xl sm:text-8xl font-bold'>Explore<br />the Menu</h1>
        <div  className='grid grid-cols-1'>
            
            <Description head='Espresso, Latte & Frappe' body='“From bold espresso shots to creamy lattes and ice-blended frappes — every cup is crafted to energize your day.”'></Description>
            <Description head='Espresso, Latte & Frappe' body='“From bold espresso shots to creamy lattes and ice-blended frappes — every cup is crafted to energize your day.”'></Description>
            <Description head='Espresso, Latte & Frappe' body='“From bold espresso shots to creamy lattes and ice-blended frappes — every cup is crafted to energize your day.”'></Description>
        </div>
    </section>
  )
}

type DescriptionProps = {
    head: string,
    body: string
}

const Description = ({head, body}: DescriptionProps) => {
    return (
    <div className='flex flex-col py-4 gap-4'>
        <h1 className='text-4xl font-bold'>{head}</h1>
        <div className='relative overflow-hidden h-80'>
            <Image 
                className='absolute -top-16' 
                alt='image1' 
                src={"/espresso.png"} 
                width={320} 
                height={200} 
                />
        </div>
        <h1>{body}</h1>
        <div className='w-1/2'>
            <LinkButton val='See Full Menu' reverse={false}></LinkButton>
        </div>
    </div>
    )
}
