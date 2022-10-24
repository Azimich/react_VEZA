import Styles from "./Tabs.module.scss";
import React, { FC } from "react";
import { TabsItem } from "./TabsItem";
import { ITab, ITabsProps } from "./Tabs";

const TabsContainer: FC<ITabsProps> = ({
  props,
  children,
  onClick = () => {},
  activeTab,
  size,
}) => {
  return (
    <div className={Styles[size]}>
      <div className={Styles.tabs__container}>
        <ul className={Styles.tabs__container__menu}>
          {props.length > 0 &&
            props.map((e: ITab) => {
              return (
                <TabsItem
                  {...e}
                  key={e.id}
                  onClick={() => onClick(e.id)}
                  tabsActive={activeTab}
                />
              );
            })}
        </ul>
        <div className={Styles.tabs__container__line}></div>
      </div>
      <div className={Styles.tabs__container_context}>{children}</div>
    </div>
  );
};

export { TabsContainer };
