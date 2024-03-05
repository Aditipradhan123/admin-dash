'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import Sidebar from './Sidebar'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
    <nav className='fixed bg-black text-gray-300 w-screen h-16 shadow-2xl pt-3 pl-4 z-10'>
        <div className='sidebar_top flex gap-4 text-xl uppercase font-sans items-center'>
        <Image alt='' src='/logo.png' width={35} height={35} />
        <span className='mr-4 lg:mr-16 xl:mr-4'>Admin</span>
        <button className='p-1 ml-96 lg:ml-32 m:ml-40 rounded-lg' onClick={handleMenuToggle}>
        <AiOutlineMenu size={32}  />
        </button>
      </div>
    </nav>
    <Sidebar isMenuOpen={isMenuOpen}/>
    </div>
  )
}

export default Navbar