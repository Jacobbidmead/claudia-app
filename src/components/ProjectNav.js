import { useState } from "react";

const ProjectNav = () => {
  const [showInfo, setShowInfo] = useState(true);

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <>
      <div className="swiper-links">
        <Link to="/Work">
          <img src="images/close.png" alt="" className="x" />
        </Link>
        <div onClick={handleShowInfo} className="more-info">
          More info
        </div>
      </div>
    </>
  );
};

export default ProjectNav;
