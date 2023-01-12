import { useState, useEffect } from "react";

const images = [
  "images/test.jpeg",
  "images/test2.jpeg",
  "images/test3.jpeg",
  "images/test4.jpeg",
  "images/test5.jpeg",
  "images/test6.jpeg",
];

export default function ImageCounter() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="home-image-container">
        <img className="home-image" src={currentImage} alt="" />
      </div>
    </>
  );
}
