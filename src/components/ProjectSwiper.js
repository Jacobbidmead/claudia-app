import React from "react";
import HiddenImg from "../imageData/HiddenData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "../styles/Swiper.css";
import { Navigation } from "swiper";

export default function ProjectSwiper() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {HiddenImg.map((el, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={el} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
