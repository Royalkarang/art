"use client";
import Image from "next/image"; 
import React from "react"; 
import data from "../../assets/exhibitions.json";  
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRouter } from "next/navigation";

const Page = () => { 
  const router = useRouter();
  return ( 
    <div className="px-2 flex flex-col gap-20"> 
      <div>
        {data?.map((item, index) => { 
            if (item.type === 'current') {
                return (
                    <div key={index} className="py-3">
                    <h1 className="text-gray pb-2 text-lg uppercase"> {item?.type} </h1>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-2/5">
                        <Image src={item?.imgSrc} width={619} height={478} alt="Exhibition image" className="rounded-lg shadow-md" />
                        </div>
                        <div className="w-full md:w-3/5 flex flex-col justify-between items-start">
                        <div className="border-b-[1px] border-black w-full pb-4">
                            <h1 className="text-3xl uppercase">
                            Name of the show: {item?.name}
                            </h1>
                            <h3 className="text-2xl text-gray py-2 uppercase">
                                {item?.artistName}
                            </h3>
                            <h5 className="text-lg text-black uppercase pb-6">
                                {item?.date}
                            </h5>
                        </div>
                        <div className="text-lg">
                            <div className="pb-2 text-black text-xl"> DESCRIPTION: </div>
                            <p className="text-gray leading-relaxed"> {item?.description} </p>
                        </div>
                        <button className="underline mt-4 text-black hover:text-gray text-lg transition duration-300" onClick={() => router.push(`/exhibitions/exhibition-detail/${item?.id}`)}> VIEW MORE </button>
                        </div>
                    </div>
                    </div>
                );
            }
            return null;
        })}
      </div>

      <div className="my-slider">
        <p className="uppercase py-4 text-gray "> upcoming exhibitions</p>
        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={50} slidesPerView={3} navigation autoplay breakpoints={{ 320: { slidesPerView: 1},
          768: { slidesPerView: 2 }, 1024: {  slidesPerView: 3 } }}>
          {data?.map((item, index) => { 
            if (item.type === "upcoming") {
              return (
                <SwiperSlide key={index} className="text-gray uppercase text-sm leading-6">
                  <Image src={item?.imgSrc} alt={item?.name} width={500} height={200} />
                  <h3 className="text-lg text-black py-1"> {item?.name} </h3>
                  <p> {item?.artistName} </p>
                  <p> {item?.value} </p>
                </SwiperSlide>
              );
            }
            return null;
          })}
        </Swiper>
      </div>

      <div className="my-slider">
        <p className="uppercase py-4 text-gray "> past exhibitions </p>
        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={50} slidesPerView={3} navigation autoplay breakpoints={{ 320: { slidesPerView: 1},
          768: { slidesPerView: 2 }, 1024: {  slidesPerView: 3 } }}>
          {data?.map((item, index) => { 
            if (item.type === "past") {
              return (
                <SwiperSlide key={index}  className="text-gray text-sm leading-6">
                  <Image src={item?.imgSrc} alt={item?.name}  width={500} height={200} />
                  <h3 className="text-lg"> {item?.name} </h3>
                  <p> {item?.artistName} </p>
                  <p> {item?.value} </p>
                </SwiperSlide>
              );
            }
            return null;
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;
