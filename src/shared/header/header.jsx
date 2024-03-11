import { useLocation, NavLink, Navigate, useNavigate } from "react-router-dom";
import "./header.css";
import { useState } from "react";

const Header = ({ logo, title, subTitle }) => {
  const [search, setSearch] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    navigate(
      `${location.pathname == "/" ? "" : "now-playing"}/?search=${
        e.target.value
      }`
    );
  };

  return (
    <div className="header">
      <div className="left">
        <img
          className="left-logo"
          src={logo}
          alt="logo"
          onClick={handleLogoClick}
        />
        <div className="info">
          <h4>{title}</h4>
          <p>{subTitle}</p>
        </div>
      </div>

      <input
        type="text"
        className="searchInput"
        placeholder="Search movie"
        value={search}
        onChange={handleSearch}
      />

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
