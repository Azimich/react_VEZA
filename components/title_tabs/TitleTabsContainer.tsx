import { FC } from "react";
import { ITitleTabs } from "./TitleTabs";
import Styles from "./TitleTabs.module.scss";

const TitleTabsContainer: FC<ITitleTabs> = ({ title = "", desc = "" }) => {
  return (
    <div className={Styles.interaction_container_title}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};
export { TitleTabsContainer };
