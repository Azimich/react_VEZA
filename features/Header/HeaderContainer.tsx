import { FC } from "react";
import { Container } from "components/common/container";
import { HeaderNav } from "./headerNav/HeaderNav";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderIcon } from "./headerIcon/HeaderIcon";
import Styles from "./Header.module.scss";

const HeaderContainer: FC = () => {
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
