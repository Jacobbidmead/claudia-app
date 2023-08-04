import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <>
      <div className="nav-bar links">
        <div>
          {" "}
          <Link to="/" style={{ color: "black" }}>
            Claudia Cantarini
          </Link>
        </div>
        <div>
          <Link to="/Work" style={{ color: "black" }}>
            Work
          </Link>
        </div>
        <div>
          {" "}
          <Link to="/about" style={{ color: "black" }}>
            contact
          </Link>
        </div>
        <div>instagram</div>
      </div>
    </>
  );
};

export default Nav;
