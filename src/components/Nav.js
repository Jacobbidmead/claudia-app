import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <>
      <div className="nav-bar links">
        <div>
          {" "}
          <Link to="/" style={{ color: "#EC5929" }} className="link">
            CLAUDIA CANTARINI
          </Link>
        </div>
        <div>
          <Link to="/Work" style={{ color: "#EC5929" }} className="link">
            work
          </Link>
        </div>
        <div>
          {" "}
          <Link to="/about" style={{ color: "#EC5929" }} className="link">
            contact
          </Link>
        </div>
        <div className="link" style={{ color: "#EC5929" }}>instagram</div>
      </div>
    </>
  );
};

export default Nav;
