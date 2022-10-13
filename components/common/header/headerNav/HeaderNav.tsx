import React, { useState } from "react";
import Link from "next/link";
import { menuData } from "../mockdata";
import { IMenuData } from "./Header.d";
import Styles from "./HeaderNav.module.scss";

const HeaderNav = () => {
  const [menu] = useState<IMenuData[]>(menuData);

  return (
    <ul className={Styles.header__menu}>
      {menu.map((item) => {
        return (
          <li key={item.id}>
            <Link href={item.url}>
              <a>{item.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { HeaderNav };
