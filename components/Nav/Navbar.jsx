import Image from "next/image";
import React from "react";
import styled from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styled.navbar}>
      <div className={styled.navbarRight}>
        <button className={styled.navbarButton}>Login</button>
        <button className={styled.navbarButton}>Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
