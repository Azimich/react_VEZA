import { ArrowBackIcon, ArrowRightWhiteIcon } from "components/icons";
import { FC } from "react";
import { ICategoriesItem } from "../Equipment";
import { Link } from "components/link";
import Styles from "../Equipment.module.scss";

const MenuItem: FC<ICategoriesItem> = ({ title = "", alias, back = false }) => {
  return (
    <>
      {back ? (
        <Link url={alias}>
          <li className={Styles.equipment__container__button_back}>
            <div>
              <ArrowBackIcon />
            </div>
            <span>{title}</span>
          </li>
        </Link>
      ) : (
        <Link url={alias}>
          <li>
            <span>{title}</span>
            <ArrowRightWhiteIcon />
          </li>
        </Link>
      )}
    </>
  );
};

export { MenuItem };
