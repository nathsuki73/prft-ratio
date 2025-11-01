import React from 'react'
import Image from 'next/image'
import LinkButton from '../buttons/LinkButton'
export const Contact = () => {
  return (
    <section className="flex flex-col gap-4 px-6 md:px-12 lg:px-32 2xl:px-110 w-full py-24">
        <h1 className='text-6xl sm:text-8xl font-bold'>Contact Us.</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 '>
           <TextField label="Name" />
           <TextField label="Phone" />
           <TextField label="Email" />
           <TextField label="Subject" />
           <TextField label="Message" className='sm:col-span-2' />
        </div>
        <div className='w-full sm:w-1/3 lg:w-1/4  self-end'>
            <LinkButton val='Send Us' reverse={false}></LinkButton>
        </div>
    </section>

  )
}

type TextFieldProps = {
    label: string
    className?: string
}

const TextField: React.FC<TextFieldProps> = ({ label, className }) => {

    const inputId = label?.toLowerCase()
    return (
        <div className={`flex flex-col items-start gap-2 p-4 ${className}`}>
            <label htmlFor={`${inputId}`} className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                id={`${inputId}`}
                type="text"
                placeholder="Enter your name"
                className="w-full border-b-2 border-black p-2 text-gray-900 outline-none transition"
            />
    </div>
    )
}

