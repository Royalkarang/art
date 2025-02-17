"use client"; 

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllHomeBanner } from "../redux/slices/allSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { allBanners, loading } = useSelector((state) => state.store);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    dispatch(getAllHomeBanner());
  }, [dispatch]);

  useEffect(() => {
    if (allBanners?.length) {
      setBanners(allBanners);
    }
  }, [allBanners]);

  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [banners]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {loading ? (
        <div className="flex justify-center items-center h-[500px]">Loading...</div>
      ) : (
        banners.length > 0 && (
          <Image
            src={banners[currentIndex].bannerImage[0]}
            alt="Home Banner"
            width={1920}
            height={500}
            className="w-full h-[500px] object-cover transition-opacity duration-1000 ease-in-out"
          />
        )
      )}
    </div>
  );
  
}
