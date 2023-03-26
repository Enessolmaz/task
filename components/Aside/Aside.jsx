import React, { useContext, useEffect } from "react";
import styled from "./aside.module.css";
import Link from "next/link";
import menuItems from "./MenuITEMS";
import { usePathname, useSearchParams } from "next/navigation";
import { DataContext } from "../Context/Context";

const Aside = () => {

  const router = usePathname()
  const { getURL, setGetURL } = useContext(DataContext)


  useEffect(() => (
    setGetURL(router)
  ), [router])

  const tasks = getURL.length > 6 ? getURL.slice(0, 7) : null;


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
              <button className={`${getURL === item.url ?
                styled.active : null
                  || tasks === item.url + "/" ? styled.active : null
                } ${styled.buttonUI}`} >
                <span className={styled.buttonLogo}>{item.logo}</span>
                <span className={styled.buttonName}>{item.name}</span>
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
