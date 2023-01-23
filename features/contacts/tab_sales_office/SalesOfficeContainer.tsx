import React, { FC, ReactNode, useEffect, useState } from "react";
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
import { IObject, IResponsePlants } from "components/map/Map";
import { Modal, useModal } from "components/modal";
import { MapIcon } from "components/icons";
import { Map } from "components/map";
import { ModalFormOffice } from "./ModalFormOffice";
import { dataBreadContacts } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { useGetListPlantsOffices } from "service/list/getPlantsOffices";
import { useGetListCities } from "service/list";
import { ICitiesResponseArray } from "features/about/tab_job/Job";
import { IOptionItem } from "components/select/Select";
import { useGetManagers } from "service/list/getManagers";
import { useAppDispatch } from "store/hooks";
import { setManagers } from "features/contacts/ContactsSlice";

const SalesOfficeContainer: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [selectedCity, setSelectedCity] = useState<IOptionItem>();
  const [cities, setCities] = useState<ICitiesResponseArray>();
  const { getManagers } = useGetManagers();
  const { getListCities } = useGetListCities();
  const { getListPlantsOffices } = useGetListPlantsOffices();
  const [contentForm, setContentForm] = useState<IObject>();
  const { isShow, toggle } = useModal();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadContacts);
  const [data, setData] = React.useState<{
    slug: string;
    activeTab: number;
    desc?: string;
  }>({
    slug: "managers",
    activeTab: 2,
    desc: "Наши менеджеры",
  });
  const [ListOffices, setListOffices] = useState<IResponsePlants>({
    offices: {
      hasError: false,
      errorMessage: "",
      customErrorCode: 0,
      systemErrorMessage: "",
      response: [],
    },
  });

  useEffect(() => {
    getListPlantsOffices().then((data) => {
      setListOffices(data.response);
    });

    getListCities().then((data) => {
      setCities(data);
    });
  }, []);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Офис продаж" }]);
  }, [dataBreadContacts]);
  useEffect(() => {
    const res = cities?.response
      ?.filter((e) => {
        return e.isDefaultCity;
      })
      .map((data) => {
        return { value: data.alias, label: data.city };
      })
      ?.shift();

    setSelectedCity(res);
  }, [cities]);

  const components: IComponents = {
    tab_director: Director,
    tab_managers: Logistic,
    tab_tsupport: Secretary,
  };

  const FormOutPut: ReactNode[] = ListOffices.offices.response.map((e) => {
    return (
      <ObjectItem
        {...e}
        onClick={(e: IObject) => handleOnClickModal(e)}
        key={"fac" + e.id}
        icon={<MapIcon />}
      />
    );
  });

  const handleOnClickModal = (e: IObject) => {
    setContentForm(e);
    toggle();
  };

  const handleTabsButton = (e: ITab) => {
    setData({ slug: e.url, activeTab: e.tabsActive, desc: e.desc });
  };

  const handleOnClickTabs = (e: ITab) => {
    router.push(contactsPath + e.url).then();
  };
  const handleOnClickSelect = (e: IOptionItem) => {
    setSelectedCity(e);
  };

  useEffect(() => {
    selectedCity &&
      getManagers(selectedCity.value).then((data) => {
        dispatch(setManagers({ managers: data }));
      });
  }, [selectedCity]);
  console.log("111", data);
  return (
    <Container className={"wrapper_clear"}>
      <BreadCrumbs data={breadCrumbs} />
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
        <div className={Styles.separator__title__container}>
          <SeparatorContainer title={data.desc} />
        </div>
        <SearchContainer
          {...cities}
          handleOnClick={(e) => handleOnClickSelect(e)}
          selectedCity={selectedCity}
        />
        <Tabs
          props={tabsSalesData}
          onClick={(e) => {
            handleTabsButton(e);
          }}
          line={false}
          menu_style={"button"}
          activeTab={data.activeTab}
        >
          {React.createElement(components[`tab_${data.slug}`])}
        </Tabs>
        <div>
          <SeparatorContainer title={"Филиалы"} />
          <p className={Styles.styles_map}>
            <MapIcon />
            {process.env.NEXT_PUBLIC_ADDRESS}
          </p>
          <YandexMap />
        </div>
      </div>
      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={<ModalFormOffice {...contentForm} />}
        theme={"modal"}
        headerText={contentForm?.object?.name}
        bgModal={"black"}
      ></Modal>
    </Container>
  );
};

export { SalesOfficeContainer };
