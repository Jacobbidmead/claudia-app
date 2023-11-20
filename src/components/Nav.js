import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = ({ currentPage }) => {
  const linkColor = currentPage === "work" ? "#EC5929" : "black";

  return (
    <div className="nav-bar links">
      <div>
        <Link to="/" style={{ color: linkColor }} className="link">
          CLAUDIA CANTARINI
        </Link>
      </div>
      <div>
        <Link to="/Work" style={{ color: linkColor }} className="link">
          work
        </Link>
      </div>
      <div>
        <Link to="/about" style={{ color: linkColor }} className="link">
          contact
        </Link>
      </div>
      <div className="link" style={{ color: linkColor }}>
        instagram
      </div>
    </div>
  );
};

export default Nav;
