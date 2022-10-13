import { FC } from "react";

import Styles from "./Layout.module.scss";
import { FooterContainer } from "../footer";
import { HeaderContainer } from "../header";

const Layout: FC = ({ children }) => (
  <>
    <header className={Styles.header}>
      <HeaderContainer />
    </header>
    <main>{children}</main>
    <footer>
      <FooterContainer />
    </footer>
  </>
);

export { Layout };
