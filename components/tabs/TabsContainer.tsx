import Styles from "./Tabs.module.scss";
import React, { FC } from "react";
import { TabsItem } from "./TabsItem";
import { ITab, ITabsProps } from "./Tabs";

const TabsContainer: FC<ITabsProps> = ({
  props,
  line = true,
  menu_style = "link",
  children,
  onClick,
  activeTab,
  size,
}) => {
  return (
    <>
      <div className={`${Styles.tabs__container} ${Styles[size]} `}>
        <ul className={`${Styles.tabs__container__menu} ${Styles[menu_style]}`}>
          {props.length > 0 &&
            props.map((e: ITab) => {
              return (
                <TabsItem
                  {...e}
                  menu_style={menu_style}
                  key={e.id}
                  onClick={() => onClick(e)}
                  tabsActive={activeTab}
                />
              );
            })}
        </ul>
        {line && (
          <div
            className={`${Styles.tabs__container__menu} ${Styles[menu_style]} ${Styles.line_fix}`}
          />
        )}
      </div>
      <div className={Styles.tabs__container_context}>{children}</div>
    </>
  );
};

export { TabsContainer };
