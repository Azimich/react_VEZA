import Styles from "./Tabs.module.scss";
import React, { FC, useState } from "react";
import { TabsItem } from "./TabsItem";
import { ITab, ITabsProps } from "./Tabs";
import { SingInForm } from "../../features/auth";
import { SingUpForm } from "../../features/auth/SingUpForm";

const TabsContainer: FC<ITabsProps> = ({ props }) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const components: { [index: string]: any } = {
    tab_1: SingInForm,
    tab_2: SingUpForm,
  };
  const handleOnClick = (e: number) => {
    setActiveTab(e);
  };

  return (
    <div className={Styles.tabs__container}>
      <ul className={Styles.tabs__container__menu}>
        {props.length > 0 &&
          props.map((e: ITab) => {
            return (
              <TabsItem
                {...e}
                key={e.id}
                onClick={() => handleOnClick(e.id)}
                tabsActive={activeTab}
              />
            );
          })}
      </ul>
      <div className={Styles.tabs__container__line}></div>
      <div className={Styles.tabs__container_context}>
        {React.createElement(components[`tab_${activeTab}`])}
      </div>
    </div>
  );
};

export { TabsContainer };
