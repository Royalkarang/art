"use client";
import React from 'react'
import Image from "next/image"; 
import auctionsData from "../../assets/auctions.json";  
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper styles
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  
  return (
    <div className='flex flex-col gap-20'>
      <div className='my-slider'>
        <Swiper modules={[Navigation, Scrollbar, A11y]} spaceBetween={50} slidesPerView={3} navigation autoplay pagination={{ clickable: true }} breakpoints={{ 320: { slidesPerView: 1},
          768: { slidesPerView: 2 }, 1024: {  slidesPerView: 3 } }}>
          {auctionsData?.map((item, index) => { 
            if (item.type === "current") {
              return (
                <SwiperSlide key={index} className="text-[#585858] text-sm leading-6">
                  <Image src={item?.imgSrc} alt={item?.art_name} width={473} height={315} />
                  <div className='flex w-full justify-between py-2'>
                    <h3 className="text-lg"> {item?.art_name} </h3>
                    {item?.sold ? <p className='text-[#FF080C] text-xl pr-2'>SOLD</p> : item?.end_date && <p>{item?.end_date}</p>}
                  </div>
                  <p> {item?.artist_name} </p>
                  <p> price: {item?.estimated_value} </p>
                  <button className={`text-white px-4 py-2 mt-3 ${item?.sold ? "bg-gray" : "bg-black"}`} disabled={item?.sold} onClick={() => {router.push("/auctions/auction-detail")}}> BID NOW </button>
                </SwiperSlide>
              );
            }
            return null;
          })}
        </Swiper>
      </div>

      <div className='my-slider'>
        <p className="uppercase py-4 text-gray "> more auctions </p>
        <Swiper modules={[Navigation, Scrollbar, A11y]} spaceBetween={50} slidesPerView={3} navigation autoplay pagination={{ clickable: true }} breakpoints={{ 320: { slidesPerView: 1},
          768: { slidesPerView: 2 }, 1024: {  slidesPerView: 3 } }}>
          {auctionsData?.map((item, index) => { 
            if (item.type === "past") {
              return (
                <SwiperSlide key={index} className="text-[#585858] text-sm leading-6">
                  <Image src={item?.imgSrc} alt={item?.art_name} width={473} height={315} />
                  <div className='flex w-full justify-between py-2'>
                    <h3 className="text-lg"> {item?.art_name} </h3>
                    {item?.sold ? <p className='text-[#FF080C] text-xl pr-2'>SOLD</p> : item?.end_date && <p>{item?.end_date}</p>}
                  </div>
                  <p> {item?.artist_name} </p>
                  <p> price: {item?.estimated_value} </p>
                  <button className='bg-black text-white px-4 py-2 mt-3' onClick={() => {router.push("/auctions/auction-detail")}}> BID NOW </button>
                </SwiperSlide>
              );
            }
            return null;
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default page
