import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div>
        <div>
          {" "}
          <Link to="/" style={{ color: "white" }}>
            Claudia Cantarini
          </Link>
        </div>
        <div>
          <Link to="/Work" className="top-links" style={{ color: "white" }}>
            Work
          </Link>
        </div>
        <div>
          {" "}
          <Link to="/about" style={{ color: "white" }}>
            contact
          </Link>
        </div>
        <div>instagram</div>
      </div>
    </>
  );
};

export default Nav;
