import Image from "next/image";
import React from "react";
import styled from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styled.navbar}>
      <div className={styled.navbarRight}>
        <div className={styled.logo}>
          {/* <img src="http://localhost:3000/_next/static/media/cvv.84ecd03a.png" width={32} height={32} /> */}
        </div>
        <div className={styled.userName}>RaidenX</div>
      </div>
    </nav>
  );
};

export default Navbar;
