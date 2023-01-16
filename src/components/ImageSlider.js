import React from "react";
import { useState } from "react";
import "../styles/ImageSlider.css";

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
      <div className="image-slider-container">
        <img src={images[currentIndex]} alt="" className="slider-image" />
      </div>
      <div className="arrow-buttons">
        <div className="arrow-button-left" onClick={goToPrevious}>
          <img
            src="images/angle-left.png"
            alt=""
            className="arrow-image-left"
          />
        </div>
        <div className="arrow-button-right" onClick={goToNext}>
          <img
            src="images/angle-right.png"
            alt=""
            className="arrow-image-right"
          />
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
