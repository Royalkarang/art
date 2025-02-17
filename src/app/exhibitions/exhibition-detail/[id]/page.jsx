"use client"
import Image from 'next/image'
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import data from "../../../../assets/exhibitions.json";  
import { LuMoveRight } from 'react-icons/lu';

const page = () => {
    const router = useRouter();
    const { id } = useParams();
    const exhibition = data.find(item => item.id === id);

  return (
    <div>
      <button className=' text-gray hover:text-black text-sm underline px-4 py-2'> Go Back </button>

      <div className='flex flex-col gap-4 items-center uppercase'>
        <h1 className='text-3xl'> Name of the show: {exhibition?.name}</h1>
        <p className='text-2xl text-gray'> {exhibition?.artistName}</p>
        <Image src={exhibition?.imgSrc} width={1529} height={982} alt="Exhibition image" className="rounded-lg shadow-md" />

        <button className='bg-black text-white hover:bg-white hover:text-black border-black border-2 px-6 py-3 my-5 text-lg flex gap-3' onClick={() => router.push('/contact')}> ENQUIRE NOW <LuMoveRight className='text-3xl' /></button>

        <div className='w-[90%] md:w-[60%]'>
          <h5 className='text-3xl pb-4 text-black'> ABOUT THE ART & THE ARTIST </h5>
          <p className='text-lg text-gray normal-case'>
            {exhibition?.description}
          </p>

        </div>

        <div className='w-[90%] md:w-[60%]'>
          <h6 className='text-3xl py-4 text-black'> INFORMATION </h6>
          <ul className='space-y-2 uppercase'>
            <li className='flex justify-between border-b-[1.5px] border-[#1010101A] py-3'>
              <span className='text-xl md:text-2xl text-gray-700'> EXHIBITION DATE </span>
              <span className='text-lg text-slate'> 16 Jun 2024 </span>
            </li>
            <li className='flex justify-between border-b-[1.5px] border-[#1010101A] py-3'>
              <span className='text-xl md:text-2xl text-gray-700'> MATERIAL INFORMATION </span>
              <span className='text-lg text-slate'> OIL PAINT </span>
            </li>
            <li className='flex justify-between border-b-[1.5px] border-[#1010101A] py-3'>
              <span className='text-xl md:text-2xl text-gray-700'> Estimated Value </span>
              <span className='text-2xl text-gray'> {exhibition?.value} </span>
            </li>
            <li className='flex justify-between border-b-[1.5px] border-[#1010101A] py-3'>
              <span className='text-xl md:text-2xl text-gray-700'> Contact Us </span>
              <a href="mailto:archanagallery@gmail.com" className='text-lg text-slate normal-case underline'>archanagallery@gmail.com</a>
              </li>
          </ul>
        </div>

      </div>
  </div>
  )
}

export default page
