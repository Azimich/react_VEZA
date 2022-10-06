import Styles from "./HeaderIcon.module.scss";
import Link from "next/link";
import { SearchIcon } from "components/icons";

const HeaderIcon = () => {
  return (
    <div className={Styles.header__icon}>
      <Link href="#popup__search">
        <a className="header__icon popup-links">
          <SearchIcon />
        </a>
      </Link>
      <Link href="/">
        <a className="header__icon popup-links"></a>
      </Link>
    </div>
  );
};

export { HeaderIcon };
