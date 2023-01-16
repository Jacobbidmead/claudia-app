import React from "react";
import { useState } from "react";

const images = [
  "images/test.jpeg",
  "images/test2.jpeg",
  "images/test3.jpeg",
  "images/test4.jpeg",
  "images/test6.jpeg",
];

const ImageSlider = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === slides.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div>
        <img src={images[currentIndex]} />
      </div>
      <button onClick={goToPrevious}></button>
      <button onClick={goToNext}></button>
    </>
  );
};

export default ImageSlider;
