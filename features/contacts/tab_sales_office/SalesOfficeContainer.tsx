import React from "react";
import { Tabs } from "../../../components/tabs";
import { tabsContactsData, tabsSalesData } from "../mockData";
import { Container } from "../../../components/common/container";
import { IComponents, ITab } from "../../../components/tabs/Tabs";
import { contactsPath } from "../../../utils/bootstrap";
import { useRouter } from "next/router";
import Styles from "./SalesOffice.module.scss";
import { SearchContainer } from "./search/SearchContainer";
import { Director, Logistic, Secretary } from "../index";

const SalesOfficeContainer = () => {
  const router = useRouter();

  const [data, setData] = React.useState<{ slug: string; activeTab: number }>({
    slug: "director",
    activeTab: 1,
  });

  const components: IComponents = {
    tab_director: Director,
    tab_logistic: Logistic,
    tab_secretary: Secretary,
  };

  const handleTabsButton = (e: ITab) => {
    setData({ slug: e.url, activeTab: e.tabsActive });
  };

  const handleOnClickTabs = (e: ITab) => {
    router.push(contactsPath + e.url);
  };

  return (
    <Container className={"wrapper"}>
      <div className={Styles.sales_office_container}>
        <Tabs
          props={tabsContactsData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={1}
          size={"max"}
        />
      </div>
      <div className={Styles.sales_office_container_items}>
        <h1>НАШИ МЕНЕДЖЕРЫ</h1>
        <SearchContainer />
        <Tabs
          props={tabsSalesData}
          onClick={(e) => {
            handleTabsButton(e);
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

export { SalesOfficeContainer };
