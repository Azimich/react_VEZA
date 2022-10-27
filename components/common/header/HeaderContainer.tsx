import { FC, useEffect, useState } from "react";
import { Container } from "components/common/container";
import Styles from "./Header.module.scss";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderNav } from "./headerNav/HeaderNav";
import { HeaderIcon } from "./headerIcon/HeaderIcon";

const HeaderContainer: FC = () => {
  const [scrollData, setScrollData] = useState<number>(0);
  useEffect(() => {
    setScrollData(window.scrollY);
    console.log(window.scrollY);
  }, [scrollData]);
  console.log(scrollData);
  return (
    <Container className="wrapper">
      <nav className={Styles.header__nav}>
        <HeaderLogo />
        <HeaderNav />
        <HeaderIcon />
      </nav>
    </Container>
  );
};
export { HeaderContainer };
