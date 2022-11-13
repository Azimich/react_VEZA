import Styles from "./HeaderIcon.module.scss";
import { SearchIcon, UserIcon, TelefoneIcon } from "components/icons";
import { IconItem } from "../../../icons/IconItem";
import { Modal, useModal } from "components/modal";
import { SearchModal } from "../search/SearchModal";
import { useRouter } from "next/router";
import { HamburgerContainer } from "components/hamburger/HamburgerContainer";
import { isMobile } from "react-device-detect";
import { FC, useEffect, useState } from "react";

interface IHeaderMenu {
  onClick?: () => void;
  isShowMenu?: boolean;
}

const HeaderIcon: FC<IHeaderMenu> = ({ onClick }) => {
  const router = useRouter();
  const { isShow, toggle } = useModal();
  const [mobile, setMobile] = useState<boolean>();
  const handleOnClickMore = (inputValue: string) => {
    router.push("/search/" + inputValue).then(() => toggle());
  };
  useEffect(() => {
    isMobile ? setMobile(true) : setMobile(false);
  }, [isMobile]);

  return (
    <>
      <div className={Styles.header__icon__box}>
        {/* Поиск */}
        <IconItem url={""} className={"header__icon"}>
          <span onClick={toggle}>
            <SearchIcon />
          </span>
        </IconItem>
        {/* Авторизация */}
        <IconItem url={"/auth"} className={"header__icon"}>
          <UserIcon />
        </IconItem>
        {/* Телефон */}
        <IconItem
          url={"tel:" + process.env.NEXT_PUBLIC_PHONE}
          className={"header__icon"}
        >
          <TelefoneIcon />
        </IconItem>
        {mobile && <HamburgerContainer onClick={onClick} />}
      </div>

      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={
          <SearchModal
            onClick={(inputValue) => handleOnClickMore(inputValue)}
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
