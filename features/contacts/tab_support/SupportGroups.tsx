import React from "react";
import Styles from "./Support.module.scss";
import { FC } from "react";
import { ITelegramItem } from "./Support";
import { Link } from "components/link";

const SupportGroups: FC<ITelegramItem> = ({
  title,
  description,
  channelUrl,
}) => {
  return (
    <div className={Styles.group__items}>
      <div className={Styles.group__item}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={Styles.button__telegram}>
          <Link url={channelUrl} target={"_blank"}>
            Перейти
          </Link>
        </div>
      </div>
    </div>
  );
};

export { SupportGroups };
