import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

// ------------------------------ HomePage Slice APi -----------------------------------------------

export const getAllHomeBanner = () => API.get(`/api/banner/get-banners`);

// ------------------------------ Artists Slice APi -----------------------------------------------


export const getAllArtist = () => API.get(`/api/artist/get-artists`);
export const getSingleArtistById = (formData) => API.get(`/api/artist/get-singleArtist/${formData?._id}`);


// ------------------------------ Artwork Slice APi -----------------------------------------------

export const getAllArtworks = () => API.get(`/api/artWork/get-artWorks`);
export const getArtworkByArtistId = (formData) => API.get(`/api/artWork/artist/${formData?._id}`);