import Styles from "./Hamburger.module.scss";
import { Bar } from "components/hamburger/Bar";
import React, { FC } from "react";

interface IHamburger {
  onClick?: () => void;
  isShowMenu?: boolean;
}

const HamburgerContainer: FC<IHamburger> = ({
  onClick,
  isShowMenu,
  ...attrs
}) => {
  return (
    <div
      {...attrs}
      className={`${
        isShowMenu
          ? Styles.hamburger_container__active
          : Styles.hamburger_container
      }`}
      onClick={onClick}
    >
      <Bar />
    </div>
  );
};

export { HamburgerContainer };
