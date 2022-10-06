import { FC } from "react";

import Styles from "./Layout.module.scss";
import { HeaderContainer } from "../../../features/Header";


const Layout: FC = ({ children }) => (
  <div className={Styles.wrapper} id={"wrapper"}>
    <header>
      <HeaderContainer />
    </header>
    <main>{children}</main>
    <footer>
    </footer>
  </div>
);

export { Layout};
