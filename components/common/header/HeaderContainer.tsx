import React, { FC, useEffect, useState } from "react";
import { Container } from "components/common/container";
import Styles from "./Header.module.scss";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderNav } from "./headerNav/HeaderNav";
import { HeaderIcon } from "./headerIcon/HeaderIcon";
import { useModal } from "components/modal";
import { useScrollStop } from "store/hooks/useScrollStop";

const HeaderContainer: FC = () => {
  const [scrollData, setScrollData] = useState<number>(0);
  const { isShow, toggle } = useModal();
  useScrollStop(isShow);

  const handleHamburgerOnClick = () => {
    toggle();
  };

  const handleScroll = () => {
    window.scrollY > 0 ? setScrollData(1) : setScrollData(0);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container className="wrapper_clear">
      <nav
        className={
          scrollData > 0 ? Styles.header__nav_active : Styles.header__nav
        }
      >
        <HeaderLogo />
        <HeaderNav isShowMenu={isShow} scroll={scrollData} />
        <HeaderIcon
          isShowMenu={isShow}
          onClick={() => handleHamburgerOnClick()}
        />
      </nav>
    </Container>
  );
};

export { HeaderContainer };
