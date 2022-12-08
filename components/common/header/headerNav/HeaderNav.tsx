import React, { FC, useState } from "react";
import { IMenuData } from "./Header.d";
import Styles from "./HeaderNav.module.scss";
import { useAppSelector } from "store/hooks/useAppSelector";
import { getMenu } from "store/slice/MenuSlice";
import { useRouter } from "next/router";
import { Link } from "components/link";
import { IconItem } from "components/icons/IconItem";
import { TelefoneIcon } from "components/icons";

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
            })
          : "Приносим свои извинения. Произошел технический сбой. Наши специалисты уже работают над решением!"}
        {/* Телефон */}
        <div className={Styles.phone__container__mobile}>
          <IconItem
            url={"tel:" + process.env.NEXT_PUBLIC_PHONE}
            className={"header__icon"}
          >
            <div className={Styles.phone__block__mobile}>
              <TelefoneIcon />
              <b>+7 999 999 99 99</b>
            </div>
          </IconItem>
        </div>
      </ul>
    </div>
  );
};

export { HeaderNav };
