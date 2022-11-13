import React, { FC, useState } from "react";
import Link from "next/link";
import { menuData } from "../mockdata";
import { IMenuData } from "./Header.d";
import Styles from "./HeaderNav.module.scss";
interface IHeaderNav {
  isShowMenu?: boolean;
  scroll?: number;
}

const HeaderNav: FC<IHeaderNav> = ({ isShowMenu, scroll }) => {
  const [menu] = useState<IMenuData[]>(menuData);
  return (
    <div>
      <ul
        className={`${Styles.header__menu} ${
          isShowMenu ? (scroll > 0 ? Styles.active_small : Styles.active) : ""
        }`}
      >
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
    </div>
  );
};

export { HeaderNav };
