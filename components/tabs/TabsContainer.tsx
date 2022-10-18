import Styles from "./Tabs.module.scss";
import { FC, useState } from "react";
import { TabsItem } from "./TabsItem";
import { ITab, ITabsProps } from "./Tabs";

const TabsContainer: FC<ITabsProps> = ({ props }) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const handleOnClick = (e: number) => {
    console.log("ee", e);
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
    </div>
  );
};

export { TabsContainer };
