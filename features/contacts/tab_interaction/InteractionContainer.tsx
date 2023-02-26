import Styles from "./Interaction.module.scss";
import { Tabs } from "components/tabs";
import { tabsContactsData } from "../mockData";
import { Container } from "components/common/container";
import { ITab } from "components/tabs/Tabs";
import { contactsPath } from "utils/bootstrap";
import { useRouter } from "next/router";
import {
  IInteractionResponseOffices,
  IInteraction,
  IInteractionResponseDirector,
  IInterationDirector,
} from "./Interaction";
import { InteractionItem } from "./InteractionItem";
import { TitleTabs } from "components/title_tabs";
import { Pagination } from "components/pagination/Pagination";
import { SeparatorContainer } from "components/separator/SeparatorContainer";
import React, { useEffect, useState } from "react";
import { dataBreadContacts } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { IPageData } from "components/pagination/Pagination.d";
import { ConnectError } from "components/connect_error";
import { IObjectItem } from "components/map/Map";
import { useGetOffices } from "service/list/getOffices";
import { useGetPlants } from "service/list/getPlants";
import { useGetEmployees } from "service/list/getEmployees";
import { InteractionDirector } from "features/contacts/tab_interaction/InteractionDirector";

const InteractionContainer = () => {
  const router = useRouter();
  const [paginationOffices, setPaginationOffices] = useState<IPageData>();
  const [paginationPlants, setPaginationPlants] = useState<IPageData>();
  const [paginationEmployees, setPaginationEmployees] = useState<IPageData>();
  const { getOffices } = useGetOffices();
  const { getPlants } = useGetPlants();
  const { getEmployees } = useGetEmployees();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadContacts);
  const [factory, setFactory] = useState<IObjectItem[]>();
  const [sales, setSales] = useState<IInteraction[]>();
  const [employees, setEmployees] = useState<IInterationDirector[]>();
  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Взаимодействие" }]);
  }, [dataBreadContacts]);
  const handleOnClickTabs = (e: ITab) => {
    router.push(contactsPath + e.url).then();
  };

  useEffect(() => {
    getOffices(Number(router.query.page_offices) || 1, 8).then(
      (data: IInteractionResponseOffices) => {
        setPaginationOffices(data?.page);
        setSales(data?.response);
      },
    );
  }, [router.query.page_offices]);

  useEffect(() => {
    getPlants(Number(router.query.page_plants) || 1, 8).then(
      (data: IInteractionResponseOffices) => {
        setPaginationPlants(data?.page);
        setFactory(data?.response);
      },
    );
    /*    listSalesData(Number(router.query.page) || 1, 8).then(
              (data: IInteractionResponse) => {
                setPagination(data?.response.offices?.page);
                setSales(data?.response.offices?.response);
                setFactory(data?.response.plants);
              },
            );*/
  }, [router.query.page_plants]);

  useEffect(() => {
    getEmployees(Number(router.query.page_employees) || 1, 12).then(
      (data: IInteractionResponseDirector) => {
        setPaginationEmployees(data?.page);
        setEmployees(data?.response);
      },
    );
  }, [router.query.page_employees]);

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
        <SeparatorContainer title={"Отделы продаж"} />
      </div>
      <ul className={Styles.interaction_items}>
        {sales ? (
          sales?.map((e: IInteraction) => {
            return <InteractionItem {...e} key={e.id} />;
          })
        ) : (
          <ConnectError type={"text"} />
        )}
      </ul>

      <Pagination
        currentPage={paginationOffices?.pageNumber}
        totalPageCount={paginationOffices?.totalPages}
        pageSize={paginationOffices?.pageSize}
        onPageChange={(page_office) => {
          router
            .push(
              contactsPath +
                router.query.slug +
                "?page_offices=" +
                page_office +
                "&page_plants=" +
                (router.query.page_plants ? router.query.page_plants : 1) +
                "&page_employees=" +
                (router.query.page_employees ? router.query.page_employees : 1),
              undefined,
              { scroll: false },
            )
            .then();
        }}
      />

      <div className={Styles.separator__container__title}>
        <SeparatorContainer title={"Заводы"} />
      </div>

      <ul className={Styles.interaction_items}>
        {factory ? (
          factory?.map((e: IInteraction) => {
            return <InteractionItem {...e} key={e.id} />;
          })
        ) : (
          <ConnectError type={"text"} />
        )}
      </ul>
      <Pagination
        currentPage={paginationPlants?.pageNumber}
        totalPageCount={paginationPlants?.totalPages}
        pageSize={paginationPlants?.pageSize}
        onPageChange={(page_plants) => {
          router
            .push(
              contactsPath +
                router.query.slug +
                "?page_offices=" +
                (router.query.page_offices ? router.query.page_offices : 1) +
                "&page_plants=" +
                page_plants +
                "&page_employees=" +
                (router.query.employees ? router.query.page_employees : 1),
              undefined,
              { scroll: false },
            )
            .then();
        }}
      />

      <div className={Styles.separator__container__title}>
        <SeparatorContainer title={"Руководители"} />
      </div>

      <ul className={Styles.interaction_items_grid}>
        {employees ? (
          employees?.map((e: IInterationDirector) => {
            return <InteractionDirector {...e} key={e.title} />;
          })
        ) : (
          <ConnectError type={"text"} />
        )}
      </ul>
      <Pagination
        currentPage={paginationEmployees?.pageNumber}
        totalPageCount={paginationEmployees?.totalPages}
        pageSize={paginationEmployees?.pageSize}
        onPageChange={(page_employees) => {
          router
            .push(
              contactsPath +
                router.query.slug +
                "?page_offices=" +
                (router.query.page_offices ? router.query.page_offices : 1) +
                "&page_plants=" +
                (router.query.page_plants ? router.query.page_plants : 1) +
                "&page_employees=" +
                page_employees,
              undefined,
              { scroll: false },
            )
            .then();
        }}
      />
    </Container>
  );
};

export { InteractionContainer };
