import { Button } from "components/button";
import React from "react";
import Styles from "./Support.module.scss";
import { FC } from "react";
import { ISupport } from "./Support";

const SupportGroups: FC<ISupport> = ({ title, subtitle, description }) => {
  return (
    <div className={Styles.group__items}>
      <div className={Styles.group__item}>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{description}</p>
        <Button children={"Перейти"} />
      </div>
    </div>
  );
};

export { SupportGroups };
