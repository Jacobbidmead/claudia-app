import React from "react";
import TestImageData from "../imageData/TestImageData";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import "../styles/Swiper.css";
import { Navigation } from "swiper";

export default function ProjectSwiper() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {TestImageData.map((i, el) => {
          return (
            <SwiperSlide key={i}>
              <img src={i} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
