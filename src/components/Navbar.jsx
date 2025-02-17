'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import logo from "../../public/logo.png";
import { SlMagnifier } from "react-icons/sl";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";  

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return pathname === path ? 'text-black font-normal' : '';
  };
  

  return (
    <div className='flex px-3 lg:px-20 lg:text-3xl text-xl  py-3 items-center justify-between shadow-md'>
      <div className='flex items-center cursor-pointer' onClick={()=> router.push('/')}>
        <Image src={logo} width={43} height={49} alt='logo' />
        <h1 className="ml-2 text-2xl font-normal">ARCHANA GALLERY</h1>
      </div>

      {/* Desktop Navbar */}
      <div className='hidden lg:flex'>
        <div className='flex gap-10 text-[16px] text-gray font-light'>
            <Link href="/" className={isActive('/')}>HOME</Link>
            <Link href="/artists" className={isActive('/artists')}>ARTISTS</Link>
            <Link href="/exhibitions" className={isActive('/exhibitions')}>EXHIBITIONS</Link>
            <Link href="/auctions" className={isActive('/auctions')}>AUCTIONS</Link>
            <Link href="/shop" className={isActive('/shop')}>SHOP</Link>
            <Link href="/contact" className={isActive('/contact')}>CONTACT</Link>
            <span className='flex items-center text-xl'> <SlMagnifier /> </span>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className='lg:hidden'>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className='text-3xl absolute right-5 top-7 z-20'>
            {isMenuOpen ? <RxCross2 />: <GiHamburgerMenu />}  
        </button>
        
        {isMenuOpen && (
          <div className={`absolute top-0 left-0 w-full h-screen bg-white shadow-lg z-10 transform transition-all duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex flex-col gap-5 text-[16px] p-10 text-center'>
                <Link href="/" className={isActive('/')} onClick={()=> setIsMenuOpen(!isMenuOpen)}>HOME</Link>
                <Link href="/artists" className={isActive('/artists')} onClick={()=> setIsMenuOpen(!isMenuOpen)}>ARTISTS</Link>
                <Link href="/exhibitions" className={isActive('/exhibitions')} onClick={()=> setIsMenuOpen(!isMenuOpen)}>EXHIBITIONS</Link>
                <Link href="/auctions" className={isActive('/auctions')} onClick={()=> setIsMenuOpen(!isMenuOpen)}>AUCTIONS</Link>
                <Link href="/shop" className={isActive('/shop')} onClick={()=> setIsMenuOpen(!isMenuOpen)}>SHOP</Link>
                <Link href="/contact" className={isActive('/contact')} onClick={()=> setIsMenuOpen(!isMenuOpen)}>CONTACT</Link>
                
                <SlMagnifier className='flex justify-center mx-auto items-center text-3xl'/>  
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
