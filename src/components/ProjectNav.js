import { Link } from "react-router-dom";

const ProjectNav = (props) => {
  return (
    <>
      <div className="swiper-links">
        <Link to="/Work">
          <img src="images/close.png" alt="" className="x" />
        </Link>
        <div onClick={props.handleShowInfo} className="more-info">
          More info
        </div>
      </div>
    </>
  );
};

export default ProjectNav;
