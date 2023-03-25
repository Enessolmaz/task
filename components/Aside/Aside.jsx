import React from "react";
import styled from "./aside.module.css";
import Link from "next/link";
import menuItems from "./MenuITEMS";

const Aside = () => {
  return (
    <aside className={styled.aside}>
      <div className={styled.logo}>
        <Link href="/" className={styled.thirteen}>
          Todoist
        </Link>
      </div>
      <div className={styled.menuItems}>
        {menuItems.map((item) => (
          <div className={styled.Items} key={item.name}>
            <Link href={item.url}>
              <button className={styled.buttonUI}>
                <span className={styled.buttonLogo}>{item.logo}</span>
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div></div>
    </aside>
  );
};

export default Aside;
