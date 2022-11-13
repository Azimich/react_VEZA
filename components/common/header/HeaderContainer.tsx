import { FC, useEffect, useState } from "react";
import { Container } from "components/common/container";
import Styles from "./Header.module.scss";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderNav } from "./headerNav/HeaderNav";
import { HeaderIcon } from "./headerIcon/HeaderIcon";
import { useModal } from "components/modal";

const HeaderContainer: FC = () => {
  const [scrollData, setScrollData] = useState<number>(0);
  const { isShow, toggle } = useModal();

  const handleScroll = () => {
    setScrollData(window.scrollY);
  };
  const handleHamburgerOnClick = () => {
    toggle();
  };
  useEffect(() => {
    isShow
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isShow]);
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
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
        <HeaderIcon onClick={() => handleHamburgerOnClick()} />
      </nav>
    </Container>
  );
};
export { HeaderContainer };
