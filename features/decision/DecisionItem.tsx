import Link from "next/link";
import { FC } from "react";
import { IDecisionData } from "./Decision";
import Styles from "./Decision.module.scss";

const DecisionItem: FC<IDecisionData> = ({
  title = "",
  description = "",
  url = "",
  image = "",
}) => {
  return (
    <Link href={url}>
      <a className={Styles.decision__container_item}>
        <img src={image} alt={title} />
        <div className={Styles.decision__container_item_way_box}>
          <h3 className={Styles.decision__container_item_way_box_title}>
            {title}
          </h3>
          <p className={Styles.decision__container_item_way_box_description}>
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
};

export { DecisionItem };
