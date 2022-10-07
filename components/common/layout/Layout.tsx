import { FC } from "react";

import Styles from "./Layout.module.scss";
import { HeaderContainer } from "../../../features/Header";

const Layout: FC = ({ children }) => (
  <>
    <header className={Styles.header}>
      <HeaderContainer />
    </header>
    <main>{children}</main>
    <footer></footer>
  </>
);

export { Layout };
