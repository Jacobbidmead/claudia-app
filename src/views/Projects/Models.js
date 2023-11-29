import React, { useState } from "react";
import ModelsImg from "../../imageData/ModelsData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "../../styles/Swiper.css";
import "../../styles/MoreInfo.css";
import { Navigation } from "swiper";
import ProjectNav from "../../components/ProjectNav.js";
import Nav from "../../components/Nav.js";

function Models() {
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
              {ModelsImg.map((el, i) => {
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

export default Models;
