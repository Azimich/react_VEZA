import Styles from "./Interaction.module.scss";
import { Tabs } from "components/tabs";
import { tabsContactsData } from "../mockData";
import { Container } from "components/common/container";
import { ITab } from "components/tabs/Tabs";
import { contactsPath } from "utils/bootstrap";
import { useRouter } from "next/router";
import { Interaction } from "./Interaction";
import { InteractionItem } from "./InteractionItem";
import { TitleTabs } from "components/title_tabs";
import { Pagination } from "components/pagination/Pagination";
import { SeparatorContainer } from "components/separator/SeparatorContainer";
import React, { useEffect, useState } from "react";
import { dataBreadContacts } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { useGetListFactory } from "service/getListFactory";
import { useGetListSales } from "service/getListSales";

const InteractionContainer = () => {
  const router = useRouter();
  const { listFactoryData } = useGetListFactory();
  const { listSalesData } = useGetListSales();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadContacts);
  const [factory, setFactory] = useState<Interaction[]>([]);
  const [sales, setSales] = useState<Interaction[]>([]);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Взаимодействие" }]);
  }, [dataBreadContacts]);
  const handleOnClickTabs = (e: ITab) => {
    router.push(contactsPath + e.url);
  };

  useEffect(() => {
    listFactoryData().then((data) => {
      console.log("33333", data);
      setFactory(data?.response);
    });
  }, []);

  useEffect(() => {
    listSalesData().then((data) => {
      console.log("44444", data);
      setSales(data?.response);
    });
  }, []);

  return (
    <Container className={"wrapper_clear"}>
      <BreadCrumbs data={breadCrumbs} />
      <div className={Styles.interaction_container}>
        <Tabs
          props={tabsContactsData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={2}
          size={"max"}
        />
      </div>
      <TitleTabs
        title={"СВЯЖИТЕСЬ С НАМИ"}
        desc={
          "Чтобы получить ответы на ваши вопросы и быть в курсе всего происходящего"
        }
      />
      <div className={Styles.separator__container__title}>
        <SeparatorContainer title={"Наши отделы продаж"} />
      </div>
      <ul className={Styles.interaction_items}>
        {sales
          ? sales?.map((e: Interaction) => {
              return <InteractionItem {...e} key={e.id} />;
            })
          : "Приносим свои извинения. Произошёл технический сбой. Наши специалисты уже работают над решением!"}
      </ul>

      <Pagination currentPage={1} totalPageCount={20} pageSize={3} />

      <div className={Styles.separator__container__title}>
        <SeparatorContainer title={"Наши филиалы"} />
      </div>
      <ul className={Styles.interaction_items}>
        {factory
          ? factory?.map((e: Interaction) => {
              return <InteractionItem {...e} key={e.id} />;
            })
          : "Приносим свои извинения. Произошёл технический сбой. Наши специалисты уже работают над решением!"}
      </ul>
    </Container>
  );
};

export { InteractionContainer };
