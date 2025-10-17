'use client'
import React from 'react'

const MenuButton = () => {
  return (
    <>
        <div className='hamburger'>
            <div className='burger burger1'></div>
            <div className='burger burger2'></div>
        </div>

        <style jsx>{`
                .hamburger {
                    display: block;
                    background-color: red;

                }

                .burger {
                    display: block;
                    width: 100%;
                    height: 2px;
                    background-color: blue;
                }
                .burger1 {
                
                }
                .burger2 {
                
                }
        `}</style>
    </>
  )
}

export default MenuButton