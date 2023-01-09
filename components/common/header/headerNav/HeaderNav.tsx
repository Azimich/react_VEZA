import React, { FC, useState } from "react";
import { IMenuState } from "./Header.d";
import Styles from "./HeaderNav.module.scss";
import { useAppSelector } from "store/hooks/useAppSelector";
import { getMenu } from "store/slice/MenuSlice";
import { useRouter } from "next/router";
import { ConnectError } from "components/connect_error";
import Link from "next/link";

interface IHeaderNav {
  isShowMenu?: boolean;
  scroll?: number;
}

const HeaderNav: FC<IHeaderNav> = ({ isShowMenu, scroll }) => {
  const [menu] = useState<IMenuState>(useAppSelector(getMenu));
  /*  const auth = useAppSelector(getAuth);*/
  const router = useRouter();

  return (
    <div>
      <ul
        className={`${Styles.header__menu} ${
          isShowMenu ? (scroll > 0 ? Styles.active_small : Styles.active) : ""
        }`}
      >
        {!menu?.hasError ? (
          menu?.response?.map((item) => {
            return (
              <li key={item.menuId}>
                <Link href={"/" + item.alias}>
                  <a
                    className={
                      router.pathname.split("/")[1] === item.alias
                        ? Styles.active_menu
                        : ""
                    }
                  >
                    {item.title}
                  </a>
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
