import { Container } from "../../../components/common/container";
import Styles from ".//References.module.scss";
import { Tabs } from "../../../components/tabs";
import {
  tabsAboutData,
  tabsSocialData,
} from "../../../components/tabs/mockdata";
import { IComponents, ITab } from "../../../components/tabs/Tabs";
import { Commercial, Industrial, Social } from "../index";
import React, { useState } from "react";

const ReferencesContainer = () => {
  const [data, setData] = useState<{ slug: string; activeTab: number }>({
    slug: "commercial",
    activeTab: 1,
  });
  const components: IComponents = {
    tab_commercial: Commercial,
    tab_industrial: Industrial,
    tab_social: Social,
  };
  const handleOnClickTabs = (e: ITab) => {
    setData({ slug: e.url, activeTab: e.tabsActive });
  };
  return (
    <Container className={"wrapper"}>
      <div className={Styles.references_container}>
        <Tabs
          props={tabsAboutData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={2}
          size={"max"}
        />
      </div>

      <div className={Styles.tabs_container}>
        <Tabs
          props={tabsSocialData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          line={false}
          menu_style={"button"}
          activeTab={data.activeTab}
          size={"max"}
        >
          {React.createElement(components[`tab_${data.slug}`])}
        </Tabs>
      </div>
    </Container>
  );
};
export { ReferencesContainer };
