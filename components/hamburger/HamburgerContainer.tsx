import Styles from "./Hamburger.module.scss";
import { Bar } from "components/hamburger/Bar";
import { FC } from "react";
interface IHamburger {
  onClick?: () => void;
  isShowMenu?: boolean;
}
const HamburgerContainer: FC<IHamburger> = ({ onClick, isShowMenu }) => {
  return (
    <div
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
