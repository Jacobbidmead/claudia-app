import React, { useState } from "react";
import SongImg from "../../imageData/SongData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "../../styles/Swiper.css";
import "../../styles/MoreInfo.css";
import { Navigation } from "swiper";
import ProjectNav from "../../components/ProjectNav.js";
import Nav from "../../components/Nav.js";

function Song() {
  const [showInfo, setShowInfo] = useState(true);

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      {showInfo ? (
        <>
          <ProjectNav handleShowInfo={handleShowInfo} />
          <div className="swiper-container">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {SongImg.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img src={el} alt="" className="models-swiper-img" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <Nav />
        </>
      ) : (
        <>
          <div onClick={handleShowInfo} className="leave-info">
            <img src="images/close.png" alt="" className="x" />
          </div>
          <div className="more-info-container">
            <div className="more-info-text">
              More info about each indiviual project will be here
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Song;
