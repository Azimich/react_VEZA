import React, { FC, useState } from "react";
import { IMenuState } from "./Header.d";
import Styles from "./HeaderNav.module.scss";
import { useAppSelector } from "store/hooks/useAppSelector";
import { getMenu } from "store/slice/MenuSlice";
import { useRouter } from "next/router";
import { Link } from "components/link";
import { ConnectError } from "components/connect_error";

interface IHeaderNav {
  isShowMenu?: boolean;
  scroll?: number;
}

const HeaderNav: FC<IHeaderNav> = ({ isShowMenu, scroll }) => {
  const [menu] = useState<IMenuState>(useAppSelector(getMenu));
  const router = useRouter();
  return (
    <div>
      <ul
        className={`${Styles.header__menu} ${
          isShowMenu ? (scroll > 0 ? Styles.active_small : Styles.active) : ""
        }`}
      >
        {!menu.hasError ? (
          menu.response?.map((item) => {
            return (
              <li key={item.menuId}>
                <Link
                  url={"/" + item.alias}
                  classLink={
                    router.pathname.split("/")[1] === item.alias
                      ? Styles.active_menu
                      : ""
                  }
                >
                  {item.title}
                </Link>
              </li>
            );
          })
        ) : (
          <ConnectError type={"text"} />
        )}
      </ul>
    </div>
  );
};

export { HeaderNav };
