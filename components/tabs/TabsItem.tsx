import React from "react";
import { FC } from "react";
import { ITab } from "./Tabs.d";
import Styles from "./Tabs.module.scss";

const TabsItem: FC<ITab> = (props) => {
  const { id, title, tabsActive = 1, onClick } = props;
  return (
    <li
      data-index={id}
      className={`${tabsActive === id && Styles.tabs__container__line_active}`}
      onClick={() => onClick(props)}
    >
      {title}
    </li>
  );
};

export { TabsItem };
