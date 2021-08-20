import React, { useState } from "react";
import "../stylesheets/Sidebar.css";

const Sidebar = ({ setShow }) => {
  const handleClick = (e) => {
    setShow(true);
  };
  return (
    <div className="sidebar">
      <span className="logoContainer">
        ______<span className="logo">Sniff</span>
      </span>
      <ul className="links">
        <li value={"news"} onClick={handleClick}>
          NEWS
        </li>

        <li>BIO</li>
        <li>LIVE</li>
        <li>PRESS KIT</li>
      </ul>
    </div>
  );
};

export default Sidebar;
