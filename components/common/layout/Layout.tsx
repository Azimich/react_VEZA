import { HeaderContainer } from "features/header";
import { FC } from "react";

import Styles from "./Layout.module.scss";
import { FooterContainer } from "../../../features/footer/FooterContainer";


const Layout: FC = ({ children }) => (
  <div className={Styles.wrapper} id={"wrapper"}>
    <header>
      <HeaderContainer />
    </header>
    <main>{children}</main>
    <footer>
      <FooterContainer/>
    </footer>
  </div>
);

export { Layout};
