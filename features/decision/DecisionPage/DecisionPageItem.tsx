import { FC } from "react";
import Styles from "./DecisionPage.module.scss";
import { IDecisionData } from "../Decision";

const DecisionPageItem: FC<IDecisionData> = ({
  description,
  title,
  imageUrl,
}) => {
  return (
    <div className={Styles.Decision_container}>
      <div className={Styles.Decision_container_img}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={Styles.Decision_container_info}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export { DecisionPageItem };
