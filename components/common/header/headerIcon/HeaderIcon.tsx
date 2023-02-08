import Styles from "./HeaderIcon.module.scss";
import {
  SearchIcon,
  UserIcon,
  TelefoneIcon,
  BellIcon,
  UserOnLoginIcon,
} from "components/icons";
import { IconItem } from "../../../icons/IconItem";
import { Modal, useModal } from "components/modal";
import { SearchModal } from "../search/SearchModal";
import { useRouter } from "next/router";
import { HamburgerContainer } from "components/hamburger/HamburgerContainer";
import { isMobile } from "react-device-detect";
import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";
import { getAuth } from "features/auth/AuthSlice";
import { checkEmptyObject } from "utils/helpers";

/*
import {useToken} from "store/hooks/useToken";
*/

interface IHeaderMenu {
  onClick?: () => void;
  onClickProfile?: () => void;
  isShowMenu?: boolean;
}

const HeaderIcon: FC<IHeaderMenu> = ({
  onClick,
  isShowMenu,
  onClickProfile,
}) => {
  const router = useRouter();
  const { isShow, toggle } = useModal();
  const [mobile, setMobile] = useState<boolean>();
  const auth = useAppSelector(getAuth);

  const handleOnClickMore = (inputValue: string) => {
    router.push("/search/" + inputValue).then(() => toggle());
  };

  useEffect(() => {
    isMobile ? setMobile(true) : setMobile(false);
  }, [isMobile]);
  // console.log("123", auth, Boolean(checkEmptyObject(auth?.data)));
  return (
    <>
      <div className={Styles.header__icon__box}>
        {/* Поиск */}
        <div className={Styles.header__icon}>
          <span onClick={toggle}>
            <SearchIcon />
          </span>
        </div>
        {/* Авторизация */}
        {auth.identify && Boolean(!checkEmptyObject(auth?.data)) && (
          <IconItem url={"/auth"} className={"header__icon"}>
            <BellIcon />
          </IconItem>
        )}

        {!auth.identify && Boolean(checkEmptyObject(auth?.data)) && (
          <IconItem url={"/auth"} className={"header__icon"}>
            <UserIcon />
          </IconItem>
        )}

        {auth.identify && Boolean(!checkEmptyObject(auth?.data)) && (
          <div className={Styles.profile_form} onClick={() => onClickProfile()}>
            <UserOnLoginIcon />
          </div>
        )}

        {/* Телефон */}
        <div className={Styles.phone__container}>
          <IconItem
            url={"tel:" + process.env.NEXT_PUBLIC_PHONE}
            className={"header__icon"}
          >
            <div className={Styles.phone__block}>
              <TelefoneIcon />
              <strong>{process.env.NEXT_PUBLIC_PHONE}</strong>
            </div>
          </IconItem>
        </div>
        {mobile && (
          <HamburgerContainer isShowMenu={isShowMenu} onClick={onClick} />
        )}
      </div>

      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={
          <SearchModal
            onClick={(inputValue: string) => handleOnClickMore(inputValue)}
          />
        }
        theme={"full_modal"}
        headerText={""}
        bgModal={"white"}
      />
    </>
  );
};

export { HeaderIcon };
