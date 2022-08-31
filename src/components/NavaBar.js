import Logo from "./MainLogo.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} style={{ width: "50px" }} alt={Logo} />
        </Link>
        <div className="navbar-nav">
          <Link className="btn btn-success" to="/pokemon">
            Search <i className="fa-solid 2-x fa-magnifying-glass"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
