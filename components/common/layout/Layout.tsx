import React, { FC } from "react";

import Styles from "./Layout.module.scss";
import { FooterContainer } from "../footer";
import { HeaderContainer } from "../header";
import Head from "next/head";
import { Container } from "../container";
import { Box_icon_social_container } from "../../box_icon_social";

const Layout: FC = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={process.env.NEXT_PUBLIC_DESCRIPTION} />
      <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      <meta name="keyword" content={process.env.NEXT_PUBLIC_KEYWORD} />
    </Head>
    <header className={Styles.header}>
      <HeaderContainer />
    </header>
    <main className={Styles.main}>
      {children}
      <Container el="section">
        <div>
          <Box_icon_social_container />
        </div>
      </Container>
    </main>
    <footer>
      <FooterContainer />
    </footer>
  </>
);

export { Layout };
