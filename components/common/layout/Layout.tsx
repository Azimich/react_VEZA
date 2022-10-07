import { FC } from "react";

import Styles from "./Layout.module.scss";
import { FooterContainer } from "../../../features/footer/FooterContainer";
import { HeaderContainer } from "../../../features/header";

const Layout: FC = ({ children }) => (
  <>
    <header className={Styles.header}>
      <HeaderContainer />
    </header>
    <main>{children}</main>

    <footer>
      <FooterContainer/>
    </footer>
</>
);

export { Layout };
