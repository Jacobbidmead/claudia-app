import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "../../styles/Swiper.css";
import "../../styles/MoreInfo.css";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import VogueImage from "../../imageData/VogueData";
function Vogue() {
  const [showInfo, setShowInfo] = useState(true);

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      {showInfo ? (
        <>
          <div className="swiper-links">
            <Link to="/Work">
              <img src="images/close.png" alt="" className="x" />
            </Link>
            <div onClick={handleShowInfo} className="more-info">
              More info
            </div>
          </div>
          <div className="swiper-container">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {VogueImage.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img src={el} alt="" className="swiper-slide-img" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </>
      ) : (
        <>
          <div onClick={handleShowInfo} className="leave-info">
            <img src="images/close.png" alt="" className="x" />
          </div>
          <div className="more-info-container">
            <div className="more-info-text">
              More info about each indiviual poroject will be here
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Vogue;
