import React, { useState } from "react";
import GirlsImg from "../../imageData/GirlsData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "../../styles/Swiper.css";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

function Girls() {
  const [showInfo, setShowInfo] = useState(true);

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      {showInfo ? (
        <>
          <Link to="/Work">Back</Link>
          <div className="swiper-container">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {GirlsImg.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img src={el} alt="" className="girls-swiper-img" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div onClick={handleShowInfo}>More info</div>{" "}
          </div>
        </>
      ) : (
        <div onClick={handleShowInfo}>info here</div>
      )}
    </>
  );
}

export default Girls;
