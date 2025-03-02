"use client";
import React, { useEffect, useState } from "react";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getAllArtist } from "../../redux/slices/allSlice";
import { motion } from "framer-motion";

const Page = () => {
  const dispatch = useDispatch();
  const { allArtists, loading } = useSelector((state) => state.store);

  useEffect(() => {
    dispatch(getAllArtist());
  }, [dispatch]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const limit = 40;
  const router = useRouter();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + limit);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - limit, 0));
  };

  const artistsToShow = allArtists?.slice(currentIndex, currentIndex + limit);

  const handleClick = (item) => {
    const fullName = `${item.firstName}-${item.lastName}`;
    router.push(`/artists/artist-detail/${fullName}/${item._id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="uppercase pb-5 text-xl"> Artists </h1>

      <motion.div 
        className="flex flex-wrap text-gray"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {artistsToShow?.map((item, index) => {
          const fullName = `${item.firstName} ${item.lastName}`;
          return (
            <motion.div
              key={index}
              className="w-1/2 lg:w-1/4 p-2 text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <span
                className="cursor-pointer hover:underline hover:text-black"
                onClick={() => handleClick(item)}
              >
                {fullName}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      <div
        className={`flex ${
          currentIndex === 0 ? "justify-end" : "justify-between"
        } pt-10`}
      >
        <motion.button
          className={`${
            currentIndex === 0 ? "hidden" : "flex"
          } items-center px-6 py-2 bg-white hover:bg-black hover:text-white border-[1px] border-black`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LuMoveLeft className="text-3xl pr-2" /> Prev
        </motion.button>
        
        <motion.button
          className={`${
            currentIndex + limit >= allArtists.length ? "hidden" : "flex"
          } items-center px-6 py-2 bg-white hover:bg-black hover:text-white border-[1px] border-black`}
          onClick={handleNext}
          disabled={currentIndex + limit >= allArtists.length}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next <LuMoveRight className="text-3xl pl-2" />
        </motion.button>
      </div>
    </div>
  );
};

export default Page;
