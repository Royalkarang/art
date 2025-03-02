"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaLink } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getArtworkByArtistId, getSingleArtistById } from '../../../../../redux/slices/allSlice';
import noImage from '../../../../../../public/no-image.jpg';
import Slideshow from '../../../../../components/Slideshow';
import { motion, AnimatePresence } from 'framer-motion';

export default function ArtistDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleArtistInfo, singleArtistArtwork } = useSelector((state) => state.store) || {};

  const [artistData, setArtistData] = useState(null);
  const [artworkData, setArtworkData] = useState([]);

  useEffect(() => {
    if (id) {
      dispatch(getSingleArtistById({ _id: id }));
      dispatch(getArtworkByArtistId({ _id: id }));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (singleArtistInfo) {
      setArtistData(singleArtistInfo);
    }

    if (singleArtistArtwork) {
      setArtworkData(singleArtistArtwork);
    }
  }, [singleArtistInfo, singleArtistArtwork]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const handleCardClick = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="flex uppercase mb-4 gap-3">
        <h1 className="font-semibold flex items-end">
          {`${artistData?.firstName || ''} ${artistData?.lastName || ''}`}
        </h1>
        {artistData?.dateOfBirth && (
          <span className="text-xs text-black font-semibold flex items-center">
            {artistData?.nationality}, b. {new Date(artistData?.dateOfBirth).getFullYear()}
          </span>
        )}
      </div>

      <div className="gap-5 flex flex-col lg:flex-row">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0 max-w-full lg:max-w-[40%]"
        >
          <Image
            src={artistData?.artistImage?.[0] || noImage}
            width={619}
            height={483}
            style={{ maxHeight: '350px' }}
            alt={artistData?.firstName || 'Artist Image'}
            className="object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="ml-6 overflow-y-auto max-h-[483px] max-w-full lg:max-w-[60%] text-sm text-gray"
        >
          <p>{artistData?.description || 'No description available.'}</p>
          <h5 className="font-semibold pt-5">
            The artist lives and works in {artistData?.presentAddress || 'N/A'}
          </h5>
        </motion.div>
      </div>

      <div className="lg:py-10">
        <h2 className="py-10">WORKS</h2>
        <Swiper modules={[Navigation, Scrollbar, A11y]} spaceBetween={50} slidesPerView={5} navigation autoplay pagination={{ clickable: true }} breakpoints={{ 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 5 } }}>
          {artworkData?.map((item, index) => (
            <SwiperSlide key={index} className="text-[#585858] text-sm leading-6 uppercase">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleCardClick(item)}
                className="cursor-pointer flex flex-col items-center lg:items-start text-center lg:text-left bg-white shadow-md rounded-lg p-4 w-full"
              >
                <Image src={item?.artWorkImage?.[0] || noImage} alt={item?.artWorkName || 'Artwork'} width={268} height={268} className="border border-gray-300 rounded-md w-full h-[180px] object-cover" />
                <h3 className="text-base md:text-lg font-semibold mt-2">{item?.artWorkName ?? 'Not Available'}</h3>
                <p className="text-xs md:text-sm py-1 text-gray-600">
                  {item?.description?.length > 50 ? `${item?.description?.slice(0, 50)}...` : item?.description}
                </p>
                <p className="text-sm font-medium">Price: {item?.priceRange ? `$${item?.priceRange}` : 'Not Available'}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <AnimatePresence>
        {isModalOpen && <Modal work={selectedWork} artist={artistData} closeModal={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

const Modal = ({ work, artist, closeModal }) => {
  if (!work) return null;
  const [showShare, setShowShare] = useState(false);


  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="h-full w-full p-8 md:p-12">
        <button onClick={closeModal} className="absolute top-8 left-8 text-gray hover:text-gray-800 text-sm underline">
          GO BACK
        </button>
        <div className='h-full flex flex-col md:flex-row items-center px-10 gap-10 pt-10 md:pt-0'>

        <div className="flex-1 flex justify-center items-center max-w-xl">
          <Slideshow images={work?.artWorkImage} height={600} width={400} />
        </div>
          
          <div className='flex flex-col items-start max-w-2xl'>
            <div className="flex uppercase mb-6 gap-4 items-end">
              <h1 className='font-semibold text-xl'>{work?.artWorkName ?? "Not Available"}</h1>
              <span className='text-sm md:text-base'>{artist?.nationality ?? "Indian"}, b.
              {new Date(artist?.dateOfBirth).getFullYear()}</span>
            </div>
            <p className="text-sm text-gray mb-4">Artist: {`${artist?.firstName || ""} ${artist?.lastName || ""}`}</p>
            <p className="text-sm text-gray mb-4">Price: {(work?.priceRange) ? `$ ${work?.priceRange}` : "Not Available"}</p>
            <p className="text-sm text-gray mb-4 max-h-24 overflow-y-scroll">Description: {work?.description || "No description available."}</p>
            <div className='flex gap-4 relative'>
              <button className='bg-black text-white hover:text-gray px-6 py-2'> ENQUIRE </button>
              <button className='bg-white text-black hover:bg-black hover:text-white border-[1px] border-black px-4 py-2' onClick={() => setShowShare(!showShare)}> + SHARE </button>

              {showShare && (
              <div className='absolute top-14 right-5' >
                <ul className='flex flex-col gap-3 text-sm'>
                  <li className='flex gap-2 items-center cursor-pointer hover:text-gray' onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}> <FaFacebook /> Facebook </li>
                  <li className='flex gap-2 items-center cursor-pointer hover:text-gray' onClick={() => window.open(`https://www.instagram.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}> <FaInstagram /> Instagram </li>
                  <li className='flex gap-2 items-center cursor-pointer hover:text-gray' onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`, '_blank')}> <FaTwitter /> Twitter </li>

                  <li className='flex gap-2 items-center cursor-pointer hover:text-gray' onClick={() => window.open(`https://wa.me/?text=${window.location.href}`, '_blank')}> <FaWhatsapp /> Whatsapp </li>
                  <li className='flex gap-2 items-center cursor-pointer hover:text-gray' onClick={() => navigator.clipboard.writeText(window.location.href)}> <FaLink /> Copy link </li>
                </ul>
              </div>)}
            </div>


          </div>

        </div>
      </div>
    </motion.div>
  );
};

