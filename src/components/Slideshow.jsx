/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import noImage from "../../public/no-image.jpg"

// Reusable Slideshow component
const Slideshow = ({ images = [], height, width }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set up the effect to change image every 2 seconds
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 2000);

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <div style={{ position: "relative"}}>
      <img
        src={images.length > 0 ? images[currentIndex] : noImage}
        alt="Slideshow"
        style={{ maxHeight: height, minWidth: width, display: "block", margin: "0 auto", border:"1px solid gray", borderRadius:"10px" }}
      />
      <span style={{ position: "absolute", top: '2px', right: "2px", fontSize: "12px", fontWeight: 'bold' }}>
        Total Images: {images.length}
      </span>
    </div>
  );
};

export default Slideshow;
