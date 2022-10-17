import React from "react";
import { FC } from "react";
import { ITabs } from "./Tabs.d";
import Styles from "./Tabs.module.scss";

const TabsItem: FC<ITabs> = ({ id, title, tabsActive = 1, onClick }) => {
  return (
    <li
      data-index={id}
      className={`${tabsActive === id && Styles.tabs__container__line_active}`}
      onClick={() => onClick(id)}
    >
      {title}
    </li>
  );
};

export { TabsItem };
