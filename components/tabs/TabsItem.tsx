import React from "react";
import { FC } from "react";
import { ITab } from "./Tabs.d";
import Styles from "./Tabs.module.scss";

const TabsItem: FC<ITab> = (props) => {
  const { id, title, tabsActive = 1, onClick, menu_style } = props;
  return (
    <li
      data-index={id}
      className={
        tabsActive === id
          ? `${Styles.tabs__container__menu} ${Styles[menu_style]} ${Styles.line_fix_active}`
          : ""
      }
      onClick={() => onClick(props)}
    >
      {title}
    </li>
  );
};

export { TabsItem };
