import Styles from "./HeaderIcon.module.scss";
import { SearchIcon, UserIcon, TelefoneIcon, BellIcon } from "components/icons";
import { IconItem } from "../../../icons/IconItem";

const HeaderIcon = () => {
  return (
    <>
      <div className={Styles.header__icon__box}>
        {/* Поиск */}
        <IconItem url={""} className={"header__icon"}>
          <SearchIcon />
        </IconItem>
        {/* Авторизация */}
        <IconItem url={""} className={"header__icon"}>
          <UserIcon />
        </IconItem>
        {/* Телефон */}
        <IconItem
          url={"tel:" + process.env.NEXT_PUBLIC_PHONE}
          className={"header__icon"}
        >
          <TelefoneIcon />
        </IconItem>
        <IconItem url={""} className={"header__icon"}>
          <BellIcon />
        </IconItem>
      </div>
    </>
  );
};

export { HeaderIcon };
