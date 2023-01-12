import { useState, useEffect } from "react";
import "../styles/HomeImage.css";

const images = [
  "images/test.jpeg",
  "images/test2.jpeg",
  "images/test3.jpeg",
  "images/test4.jpeg",
  "images/test6.jpeg",
];

export default function ImageCounter() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="home-image-container">
        <img className="home-image" src={images[currentIndex]} alt="" />
      </div>
    </>
  );
}
