// "use client"
// import React, { useState } from 'react'
// import artistData from "../../assets/artists.json"
// import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
// import { useRouter } from 'next/navigation';

// const Page = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const limit = 40 
//   const router = useRouter();

//   const handleNext = () => {
//     setCurrentIndex(prevIndex => prevIndex + limit) 
//   }

//   const handlePrev = () => {
//     setCurrentIndex(prevIndex => Math.max(prevIndex - limit, 0)) 
//   }

//   const artistsToShow = artistData.slice(currentIndex, currentIndex + limit)

//   const handleClick = (item) => {
//     const artistNameEncoded = item?.artist_name.replace(" ", "_")
//     router.push(`/artists/artist-detail/${item.id}/${artistNameEncoded}`);
//   };

//   return (
//     <div>
//       <h1 className='uppercase pb-5 text-xl'> Artists </h1>
//       <div className='flex flex-wrap text-gray'>
//         {artistsToShow?.map((item, index) => (
//           <span key={index} className='w-1/2 lg:w-1/5 p-2 cursor-pointer hover:underline hover:text-black' onClick={() => handleClick(item)}> {item.artist_name} </span>
//         ))}
//       </div>

//       <div className={`flex ${currentIndex === 0 ? "justify-end" : "justify-between"}   pt-10`}>
//         <button className={`${currentIndex === 0 ? "hidden" : "flex"} items-center px-6 py-2 bg-white hover:bg-black hover:text-white border-[1px] border-black`} onClick={handlePrev} disabled={currentIndex === 0} >
//           <LuMoveLeft className='text-3xl pr-2' /> Prev
//         </button>
//         <button className={`${currentIndex + limit >= artistData.length ? "hidden" : "flex"} items-center px-6 py-2 bg-white hover:bg-black hover:text-white border-[1px] border-black`} onClick={handleNext} disabled={currentIndex + limit >= artistData.length} > Next <LuMoveRight className='text-3xl pl-2' />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Page

"use client"
import React, { useEffect, useState } from 'react'
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getAllArtist } from '../../redux/slices/allSlice';

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
    setCurrentIndex(prevIndex => prevIndex + limit);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - limit, 0));
  };

  const artistsToShow = allArtists?.slice(currentIndex, currentIndex + limit);

  const handleClick = (item) => {
    const fullName = `${item.firstName}-${item.lastName}`
    router.push(`/artists/artist-detail/${fullName}/${item._id}`);
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h1 className='uppercase pb-5 text-xl'> Artists </h1>
      <div className='flex flex-wrap text-gray'>
        {artistsToShow?.map((item, index) => {
          const fullName = `${item.firstName} ${item.lastName}`; // Concatenate firstName and lastName
          return (
            <div key={index} className='w-1/2 lg:w-1/4 p-2 text-xl '> 
              <span className='cursor-pointer hover:underline hover:text-black' onClick={() => handleClick(item)}> {fullName}  </span>
            </div>
          );
        })}
      </div>

      <div className={`flex ${currentIndex === 0 ? "justify-end" : "justify-between"}   pt-10`}>
        <button className={`${currentIndex === 0 ? "hidden" : "flex"} items-center px-6 py-2 bg-white hover:bg-black hover:text-white border-[1px] border-black`} onClick={handlePrev} disabled={currentIndex === 0} >
          <LuMoveLeft className='text-3xl pr-2' /> Prev
        </button>
        <button className={`${currentIndex + limit >= allArtists.length ? "hidden" : "flex"} items-center px-6 py-2 bg-white hover:bg-black hover:text-white border-[1px] border-black`} onClick={handleNext} disabled={currentIndex + limit >= allArtists.length} > Next <LuMoveRight className='text-3xl pl-2' />
        </button>
      </div>
    </div>
  );
};

export default Page;
