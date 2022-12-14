import Styles from "./HeaderIcon.module.scss";
import { SearchIcon, UserIcon, TelefoneIcon, BellIcon } from "components/icons";
import { IconItem } from "../../../icons/IconItem";
import { Modal, useModal } from "components/modal";
import { SearchModal } from "../search/SearchModal";
import { useRouter } from "next/router";
import { HamburgerContainer } from "components/hamburger/HamburgerContainer";
import { isMobile } from "react-device-detect";
import { FC, useEffect, useState } from "react";
import { useAuth } from "service/auth/auth";
import { useToken } from "store/hooks/useToken";

/*
import {useToken} from "store/hooks/useToken";
*/

interface IHeaderMenu {
  onClick?: () => void;
  isShowMenu?: boolean;
}

const HeaderIcon: FC<IHeaderMenu> = ({ onClick, isShowMenu }) => {
  const router = useRouter();
  const { isShow, toggle } = useModal();
  const [mobile, setMobile] = useState<boolean>();
  const { checkAuth } = useAuth();
  const { getToken } = useToken();
  console.log("token", getToken());
  const handleOnClickMore = (inputValue: string) => {
    router.push("/search/" + inputValue).then(() => toggle());
  };
  useEffect(() => {
    checkAuth(getToken().tokens.token).then((data) => {
      console.log("data", data);
    });
  }, []);

  useEffect(() => {
    isMobile ? setMobile(true) : setMobile(false);
  }, [isMobile]);

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
        <IconItem url={"/auth"} className={"header__icon"}>
          <BellIcon />
        </IconItem>

        <IconItem url={"/auth"} className={"header__icon"}>
          <UserIcon />
        </IconItem>
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
