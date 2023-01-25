import Styles from "./Interaction.module.scss";
import { Tabs } from "components/tabs";
import { tabsContactsData } from "../mockData";
import { Container } from "components/common/container";
import { ITab } from "components/tabs/Tabs";
import { contactsPath } from "utils/bootstrap";
import { useRouter } from "next/router";
import { IInteractionResponse, Interaction } from "./Interaction";
import { InteractionItem } from "./InteractionItem";
import { TitleTabs } from "components/title_tabs";
import { Pagination } from "components/pagination/Pagination";
import { SeparatorContainer } from "components/separator/SeparatorContainer";
import React, { useEffect, useState } from "react";
import { dataBreadContacts } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { useGetListSales } from "service/list/getSales";
import { IPageData } from "components/pagination/Pagination.d";
import { ConnectError } from "components/connect_error";
import { IObjectItem } from "components/map/Map";

const InteractionContainer = () => {
  const router = useRouter();
  const [pagination, setPagination] = useState<IPageData>();
  const { listSalesData } = useGetListSales();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadContacts);
  const [factory, setFactory] = useState<IObjectItem[]>();
  const [sales, setSales] = useState<Interaction[]>();
  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Взаимодействие" }]);
  }, [dataBreadContacts]);
  const handleOnClickTabs = (e: ITab) => {
    router.push(contactsPath + e.url).then();
  };

  useEffect(() => {
    listSalesData(Number(router.query.page) || 1, 8).then(
      (data: IInteractionResponse) => {
        setPagination(data?.response.offices?.page);
        setSales(data?.response.offices?.response);
        setFactory(data?.response.plants);
      },
    );
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
        {sales ? (
          sales?.map((e: Interaction) => {
            return <InteractionItem {...e} key={e.id} />;
          })
        ) : (
          <ConnectError type={"text"} />
        )}
      </ul>

      <Pagination
        currentPage={pagination?.pageNumber}
        totalPageCount={pagination?.totalPages}
        pageSize={pagination?.pageSize}
        onPageChange={(page) => {
          router
            .push(contactsPath + router.query.slug + "?page=" + page)
            .then();
        }}
      />

      <div className={Styles.separator__container__title}>
        <SeparatorContainer title={"Наши филиалы"} />
      </div>

      <ul className={Styles.interaction_items}>
        {factory ? (
          factory?.map((e: Interaction) => {
            return <InteractionItem {...e} key={e.id} />;
          })
        ) : (
          <ConnectError type={"text"} />
        )}
      </ul>
    </Container>
  );
};

export { InteractionContainer };
