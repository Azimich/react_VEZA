import React, { FC, useState } from "react";
import { IMenuData } from "./Header.d";
import Styles from "./HeaderNav.module.scss";
import { useAppSelector } from "store/hooks/useAppSelector";
import { getMenu } from "store/slice/MenuSlice";
import { useRouter } from "next/router";
import { Link } from "components/link";

interface IHeaderNav {
  isShowMenu?: boolean;
  scroll?: number;
}

const HeaderNav: FC<IHeaderNav> = ({ isShowMenu, scroll }) => {
  const [menu] = useState<IMenuData[]>(useAppSelector(getMenu));

  const router = useRouter();
  return (
    <div>
      <ul
        className={`${Styles.header__menu} ${
          isShowMenu ? (scroll > 0 ? Styles.active_small : Styles.active) : ""
        }`}
      >
        {menu?.map((item) => {
          return (
            <li key={item.MenuId}>
              <Link
                url={"/" + item.Alias}
                classLink={
                  router.pathname.split("/")[1] === item.Alias
                    ? Styles.active_menu
                    : ""
                }
              >
                {item.Title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { HeaderNav };
