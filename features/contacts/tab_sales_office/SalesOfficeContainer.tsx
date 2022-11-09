import React, { FC, ReactNode, useState } from "react";
import { Tabs } from "components/tabs";
import { tabsContactsData, tabsSalesData } from "../mockData";
import { Container } from "components/common/container";
import { IComponents, ITab } from "components/tabs/Tabs";
import { contactsPath } from "utils/bootstrap";
import { useRouter } from "next/router";
import Styles from "./SalesOffice.module.scss";
import { SearchContainer } from "features/contacts";
import { Director, Logistic, Secretary } from "../index";
import { YandexMap } from "../index";
import { SeparatorContainer } from "components/separator/SeparatorContainer";
import { ObjectItem } from "features/about/ObjectItem";
import { IObjectItem } from "components/map/Map";
import { Modal, useModal } from "components/modal";
import { LogoIcon, MapIcon } from "components/icons";
import { Map } from "components/map";
import { office_sales_data } from "features/contacts/tab_sales_office/mockData";
import { ModalFormOffice } from "./ModalFormOffice";

const SalesOfficeContainer: FC = () => {
  const router = useRouter();
  const [contentForm, setContentForm] = useState<IObjectItem>();
  const { isShow, toggle } = useModal();

  const [data, setData] = React.useState<{ slug: string; activeTab: number }>({
    slug: "director",
    activeTab: 1,
  });

  const components: IComponents = {
    tab_director: Director,
    tab_logistic: Logistic,
    tab_secretary: Secretary,
  };

  const FormOutPut: ReactNode[] = office_sales_data.map((e) => {
    return (
      <ObjectItem
        {...e}
        onClick={(e: IObjectItem, alias: string) =>
          handleOnClickModal(e, alias)
        }
        key={"fac" + e.id}
        icon={<MapIcon />}
      />
    );
  });

  const handleOnClickModal = (e: IObjectItem, alias: string) => {
    e.alias = alias;
    setContentForm(e);
    toggle();
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
      <Map formOutPut={FormOutPut} />
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

        <div>
          <SeparatorContainer title={"Филиалы"} />
          <p className={Styles.styles_map}>
            <MapIcon />
            Наш адрес: Зелёный проспект, 20, Москва
          </p>
          <YandexMap />
        </div>
      </div>
      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={<ModalFormOffice {...contentForm} />}
        theme={"modal"}
        headerText={<LogoIcon />}
      ></Modal>
    </Container>
  );
};

export { SalesOfficeContainer };
