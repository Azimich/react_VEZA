import React from "react";
import Link from "next/link";
import Styles from "../Header.module.scss";

const HeaderLogo = () => {
  return (
    <div>
      <Link href="/">
        <a className={Styles.header__logo}>
          <img src="/images/logo.svg" alt="vezalogo" />
        </a>
      </Link>
    </div>
  );
};

export { HeaderLogo };
