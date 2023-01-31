import React, { FC } from "react";
import Styles from "./QuestionnairesContainer.module.scss";
import { IQuestionnaires } from "features/resources/tab_bim/Bim";
import { Link } from "components/link";
import { resourcesPath } from "utils/bootstrap";

const QuestionnairesItem: FC<IQuestionnaires> = ({
  title,
  subtitle,
  alias,
}) => {
  return (
    <Link
      url={resourcesPath + "questionnaires/" + alias}
      classLink={Styles.questionnaires}
    >
      <div className={Styles.questionnaires__info}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </Link>
  );
};

export { QuestionnairesItem };
