import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <>
      <div className="nav-bar links">
        <div>
          {" "}
          <Link to="/" style={{ color: "black" }} className="link">
            CLAUDIA CANTARINI
          </Link>
        </div>
        <div>
          <Link to="/Work" style={{ color: "black" }} className="link">
            work
          </Link>
        </div>
        <div>
          {" "}
          <Link to="/about" style={{ color: "black" }} className="link">
            contact
          </Link>
        </div>
        <div className="link">instagram</div>
      </div>
    </>
  );
};

export default Nav;
