"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import imageSrc from "../../../../public/auctions/auction1.png"
import { MdArrowRightAlt } from "react-icons/md";
import { useRouter } from 'next/navigation';
import GetTouch from '../../../components/GetTouch';

const page = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen)

  return (
    <div>
      <button className='text-slate underline mt-4 ml-4' onClick={() => router.back()}> GO BACK </button>
      
      <div className='uppercase w-[80%] md:w-[60%] flex flex-col items-center gap-8 mx-auto mt-10'>
        <h3 className='text-xl text-gray-700'> Lindsay Bayer </h3>
        <h1 className='text-4xl md:text-5xl font-semibold text-center'> Blissfulness in the Dark</h1>
        
        <Image src={imageSrc} width={800} height={1120} alt='Artwork by Lindsay Bayer' className='rounded-lg shadow-lg'/>
        
        <button className='flex px-8 py-3 bg-black text-white items-center shadow-md hover:bg-gray-800 transition-all' onClick={() => setIsModalOpen(true)}>
          Place Bid Now 
          <MdArrowRightAlt className='text-3xl pl-2' />
        </button>

        <div className='w-[90%] md:w-[80%]'>
          <h5 className='text-3xl pb-4 text-black'> ABOUT THE ART & THE ARTIST </h5>
          <p className='text-lg text-gray normal-case'>
            Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.
          </p>
        </div>

        <div className='w-[90%] md:w-[80%]'>
          <h6 className='text-3xl pb-4 text-black'> INFORMATION </h6>
          <ul className='space-y-3'>
            <li className='flex justify-between border-b-[1.5px] border-[#1010101A] py-3'>
              <span className='text-xl md:text-2xl text-gray-700'> Start Date </span>
              <span className='text-lg text-slate'> 16 Jun 2022, 12 AM </span>
            </li>
            <li className='flex justify-between border-b-[1.5px] border-[#1010101A] py-3'>
              <span className='text-xl md:text-2xl text-gray-700'> End Date </span>
              <span className='text-lg text-slate'> 18 Jun 2022, 11:59 PM </span>
            </li>
            <li className='flex justify-between border-b-[1.5px] border-[#1010101A] py-3'>
              <span className='text-xl md:text-2xl text-gray-700'> Estimated Value </span>
              <span className='text-2xl text-gray'> $2000 - $5000 </span>
            </li>
            <li className='flex justify-between border-b-[1.5px] border-[#1010101A] py-3'>
              <span className='text-xl md:text-2xl text-gray-700'> Contact Us </span>
              <a href="mailto:archanagallery@gmail.com" className='text-lg text-slate normal-case underline'>archanagallery@gmail.com</a>
              </li>
          </ul>
        </div>
      </div>
      <GetTouch isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </div>
  )
}

export default page
