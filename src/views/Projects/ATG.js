import React, { useState } from "react";
import GlittersImg from "../../imageData/GlittersData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "../../styles/Swiper.css";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

function ATG() {
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
              <div className="back-to-work">Back</div>
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
              {GlittersImg.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img src={el} alt="" className="glitters-swiper-img" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div onClick={handleShowInfo} className="more-info">
              More info
            </div>{" "}
          </div>
        </>
      ) : (
        <>
          <div onClick={handleShowInfo} className="leave-info">
            Quit
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

export default ATG;
