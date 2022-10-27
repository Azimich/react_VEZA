import { FC, useEffect, useState } from "react";
import { Container } from "components/common/container";
import Styles from "./Header.module.scss";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderNav } from "./headerNav/HeaderNav";
import { HeaderIcon } from "./headerIcon/HeaderIcon";

const HeaderContainer: FC = () => {
  const [scrollData, setScrollData] = useState<number>(0);

  const handleScroll = () => {
    setScrollData(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container className="wrapper">
      <nav
        className={
          scrollData > 0 ? Styles.header__nav_active : Styles.header__nav
        }
      >
        <HeaderLogo />
        <HeaderNav />
        <HeaderIcon />
      </nav>
    </Container>
  );
};
export { HeaderContainer };
