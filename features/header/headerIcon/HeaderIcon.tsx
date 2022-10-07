import Styles from "./HeaderIcon.module.scss";
import Link from "next/link";
import { SearchIcon, UserIcon, PhoneIcon } from "components/icons";

const HeaderIcon = () => {
  return (
    <div className={Styles.header__icons}>
      {/* Поиск */}
      <Link href="#popup__search">
        <a className="header__icon">
          <SearchIcon />
        </a>
      </Link>

      {/* Авторизация */}
      <Link href="/">
        <a className="header__icon">
          <UserIcon />
        </a>
      </Link>

      {/* Телефон */}
      <Link href="tel: +7 (495) 223-01-92">
        <a className="support__phone">
          <PhoneIcon />
          <span>+7 (495) 223-01-92</span>
        </a>
      </Link>
    </div>
  );
};

export { HeaderIcon };
