import React from 'react'
import Image from 'next/image'
import LinkButton from '../buttons/LinkButton'
export const FindUs = () => {
  return (
    <div className="relative w-full  h-116 md:h-96 bg-[#3C2A21]">
        <div className='relative w-full min-h-10/12  py-24'>
            <Image
                src="/coffee-bg.webp"
                alt="coffee background"
                fill
                className="object-cover"
                priority
            />
        </div>

        <div className='absolute inset-0'>
            <div className='flex flex-col p-4 justify-center items-center lg:items-start gap-8 sm:w-4/5 lg:w-3/5 ml-auto text-center lg:text-start'>
                <h1 className='text-4xl font-bold'>Brewed Near You</h1>
                <h1 className='w-5/6'>From cozy corners to lively streets, our branches are crafted to be your go-to spot for every coffee craving. Whether you’re after a quiet moment or a quick caffeine fix, there’s a perfect place waiting for you—warm, welcoming, and always brewing something special.</h1>
                <div className='w-1/2 md:w-1/3 lg:w-1/4 justify-end'>
                    <LinkButton val='Find Us'></LinkButton>
                </div>
            </div>
        </div>
</div>

  )
}

