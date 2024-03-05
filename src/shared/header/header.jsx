import { NavLink } from "react-router-dom";
import "./header.css";

const Header = ({ logo, title, subTitle }) => {
  return (
    <div className="header">
      <div className="left">
        <img className="left-logo" src={logo} alt="logo" />
        <div className="info">
          <h4>{title}</h4>
          <p>{subTitle}</p>
        </div>
      </div>
      <div className="right">
        <NavLink className="link" to="/" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink className="link" to="/now-playing" activeClassName="active">
          Now Playing
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
