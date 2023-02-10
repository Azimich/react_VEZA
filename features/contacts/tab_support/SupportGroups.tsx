import { Button } from "components/button";
import React from "react";
import Styles from "./Support.module.scss";
import { FC } from "react";
import { ITelegramItem } from "./Support";

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
        <Button children={"Перейти"} link={channelUrl} />
      </div>
    </div>
  );
};

export { SupportGroups };
