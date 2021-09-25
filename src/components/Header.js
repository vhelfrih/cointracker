import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header_container" >
      <div className="header">Cryptocurrency Price Tracker</div>
      <form>
        <input className="input" type="text" placeholder="Search..." onChange={props.inputChange} />
      </form>
    </div>
  );
};

export default Header;
