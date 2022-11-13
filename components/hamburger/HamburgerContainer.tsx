import Styles from "./Hamburger.module.scss";
import { Bar } from "components/hamburger/Bar";
import { FC } from "react";
interface IHamburger {
  onClick?: () => void;
}
const HamburgerContainer: FC<IHamburger> = ({ onClick }) => {
  return (
    <div className={Styles.hamburger_container} onClick={onClick}>
      <Bar />
    </div>
  );
};

export { HamburgerContainer };
