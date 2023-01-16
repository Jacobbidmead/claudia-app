import React from "react";
import { useState } from "react";

const ImageSlider = () => {
  let images = [
    "images/test.jpeg",
    "images/test2.jpeg",
    "images/test3.jpeg",
    "images/test4.jpeg",
    "images/test6.jpeg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="home-image-container">
        <img src={images[currentIndex]} className="home-image" />
      </div>
      <button style={{ width: "60px" }} onClick={goToPrevious}>
        prev
      </button>
      <button style={{ width: "60px" }} onClick={goToNext}>
        next
      </button>
    </>
  );
};

export default ImageSlider;
