import React, { FC } from "react";
import Styles from "./QuestionnairesContainer.module.scss";
import { IQuestionnaires } from "features/resources/tab_bim/Bim";

const QuestionnairesItem: FC<IQuestionnaires> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <div className={Styles.questionnaires}>
      <div className={Styles.questionnaires__img__block}>
        <img src={"/images/" + image} alt={title} />
      </div>
      <div className={Styles.questionnaires__info}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export { QuestionnairesItem };
