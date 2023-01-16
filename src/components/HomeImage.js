// import React, { useState, useEffect } from "react";
// import "../styles/HomeImage.css";

// const ImageCounter = () => {
//   let images = [
//     "images/test.jpeg",
//     "images/test2.jpeg",
//     "images/test3.jpeg",
//     "images/test4.jpeg",
//     "images/test6.jpeg",
//   ];
//   const [currentImage, setCurrentImage] = useState(images[0]);

//   const changeBackground = () => {
//     let currentIndex = images.indexOf(currentImage);
//     if (currentIndex === images.length - 1) {
//       currentIndex = -1;
//     }
//     setCurrentImage(images[currentIndex + 1]);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(changeBackground, 1000);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <>
//       <div className="home-image-container">
//         <img src={currentImage} className="home-image" />
//       </div>
//     </>
//   );
// };

// export default ImageCounter;
