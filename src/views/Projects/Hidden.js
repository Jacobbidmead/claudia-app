import React, { useState } from "react";
import HiddenImg from "../../imageData/HiddenData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "../../styles/Swiper.css";
import { Navigation } from "swiper";

function Hidden() {
  const [showInfo, setShowInfo] = useState(true);

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      {showInfo ? (
        <>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {HiddenImg.map((el, i) => {
              return (
                <SwiperSlide key={i}>
                  <img src={el} alt="" className="swiper-slide-img" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div onClick={handleShowInfo}>More info</div>{" "}
        </>
      ) : (
        <div onClick={handleShowInfo}>info here</div>
      )}
    </>
  );
}

export default Hidden;
