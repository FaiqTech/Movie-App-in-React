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
        <p>Home</p>
        <p>Now Playing</p>
      </div>
    </div>
  );
};

export default Header;
