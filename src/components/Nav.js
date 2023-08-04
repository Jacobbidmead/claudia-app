import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <>
      <div className="nav-bar links">
        <div>
          {" "}
          <Link to="/" style={{ color: "white" }} className="link">
            Claudia Cantarini
          </Link>
        </div>
        <div>
          <Link to="/Work" style={{ color: "white" }} className="link">
            work
          </Link>
        </div>
        <div>
          {" "}
          <Link to="/about" style={{ color: "white" }} className="link">
            contact
          </Link>
        </div>
        <div className="link">instagram</div>
      </div>
    </>
  );
};

export default Nav;
