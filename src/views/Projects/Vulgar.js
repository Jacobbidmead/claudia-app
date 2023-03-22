import React, { useState } from "react";
import { Link } from "react-router-dom";

function Vulgar() {
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

          <div className="vulgar-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xWKL-9y_Z24"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
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

export default Vulgar;
