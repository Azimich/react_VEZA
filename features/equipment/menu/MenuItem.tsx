import { ArrowRightWhiteIcon } from "components/icons";
import { FC } from "react";
import { ICatalogEquipmentData } from "../Equipment";
import { Link } from "../../../components/link";

const MenuItem: FC<ICatalogEquipmentData> = ({
  title = "",
  alias,
  /*                                                 id,
                                                 onClick,
                                                 back = false,
                                                 level,
                                                 childrenData*/
}) => {
  /*back ?
        <a className={Styles.equipment__container__button_back}>
            <div ><ArrowBackIcon/></div>
            <span>{title}</span></a>
        :*/

  return (
    <Link url={alias}>
      <li>
        <span>{title}</span>
        <ArrowRightWhiteIcon />
      </li>
    </Link>
  );
};

export { MenuItem };
