import React, { FC, useState } from "react";
import { IMenuState } from "./Header.d";
import Styles from "./HeaderNav.module.scss";
import { useAppSelector } from "store/hooks/useAppSelector";
import { getMenu } from "store/slice/MenuSlice";
import { useRouter } from "next/router";
import { ConnectError } from "components/connect_error";
import { Link } from "components/link";
import { getAuth } from "features/auth/AuthSlice";
import { checkedAccessMenu } from "utils/helpers";

interface IHeaderNav {
  isShowMenu?: boolean;
  scroll?: number;
  isShow?: () => void;
}

const HeaderNav: FC<IHeaderNav> = ({ isShowMenu, scroll, isShow }) => {
  const [menu] = useState<IMenuState>(useAppSelector(getMenu));
  const auth = useAppSelector(getAuth);
  const router = useRouter();
  return (
    <ul
      className={`${Styles.header__menu} ${
        isShowMenu ? (scroll > 0 ? Styles.active_small : Styles.active) : ""
      }`}
    >
      {!menu?.hasError ? (
        menu?.response?.map((item) => {
          return (
            checkedAccessMenu(auth?.data?.response?.role, item.onlyAdmin) && (
              <li key={item.menuId} onClick={() => isShow()}>
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
            )
          );
        })
      ) : (
        <ConnectError type={"text"} />
      )}
    </ul>
  );
};
export { HeaderNav };
