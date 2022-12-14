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
        {menu
          ? menu?.map((item) => {
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
          : "Приносим свои извинения. Произошел технический сбой. Наши специалисты уже работают над решением!"}
      </ul>
    </div>
  );
};

export { HeaderNav };
