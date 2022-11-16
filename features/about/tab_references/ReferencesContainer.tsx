import { Container } from "components/common/container";
import Styles from "./References.module.scss";
import { Tabs } from "../../../components/tabs";
import { tabsAboutData, tabsSocialData } from "../../contacts/mockData";
import { IComponents, ITab } from "components/tabs/Tabs";
import { Commercial, Industrial, Social } from "../index";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { aboutPath } from "utils/bootstrap";
import { useRouter } from "next/router";
import { MapContainer } from "components/map/MapContainer";
import { IObject, IObjectItem } from "components/map/Map";
import { Modal, useModal } from "components/modal";
import { ObjectItem } from "../ObjectItem";
import { ReferenceIcon } from "components/icons";
import { ModalFormFactory } from "../tab_who_we/ModalFormFactory";
import { referenceObject } from "./mockData";
import { SideBar } from "components/map/SideBar";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadAbout } from "components/breadcrumbs/mockData";

const ReferencesContainer: FC = () => {
  const [selectedCheckBox, setSelectedCheckBox] = useState<ITab[]>([]);
  const [sideBarData] = useState(tabsSocialData);
  const [selectedReferenceData, setSelectedReferenceData] = useState<IObject[]>(
    []
  );
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadAbout);
  const [contentForm, setContentForm] = useState<IObjectItem>();
  const { isShow, toggle } = useModal();
  const router = useRouter();
  const [data, setData] = useState<{ slug: string; activeTab: number }>({
    slug: "commercial",
    activeTab: 1,
  });

  const handleSideBarClick = (e: ITab) => {
    setSelectedCheckBox(
      selectedCheckBox.filter((item) => item.id === e.id).length > 0
        ? selectedCheckBox.filter((item) => item.id !== e.id)
        : [...selectedCheckBox, e]
    );
  };
  useEffect(() => {
    setSelectedReferenceData(
      referenceObject.filter(
        (item) =>
          selectedCheckBox
            .map((e) => e.url)
            .flat()
            .indexOf(item.type_object) !== -1
      )
    );
  }, [selectedCheckBox]);

  const FormOutPut: ReactNode[] = selectedReferenceData.map((e) => {
    return (
      <ObjectItem
        {...e}
        onClick={(e: IObjectItem, alias: string) =>
          handleOnClickModal(e, alias)
        }
        key={"fac" + e.id}
        icon={<ReferenceIcon />}
      />
    );
  });

  const components: IComponents = {
    tab_commercial: Commercial,
    tab_industrial: Industrial,
    tab_social: Social,
  };

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Референсы" }]);
  }, [dataBreadAbout]);

  const handleOnClickTabs = (e: ITab) => {
    setData({ slug: e.url, activeTab: e.tabsActive });
  };

  const handleOnClickTabsLink = (e: ITab) => {
    router.push(aboutPath + e.url);
  };

  const handleOnClickModal = (e: IObjectItem, alias: string) => {
    e.alias = alias;
    setContentForm(e);
    toggle();
  };
  return (
    <Container className={"wrapper_clear"}>
      <BreadCrumbs data={breadCrumbs} />

      <div className={Styles.references_container}>
        <Tabs
          props={tabsAboutData}
          onClick={(e) => {
            handleOnClickTabsLink(e);
          }}
          activeTab={2}
          size={"max"}
        />
      </div>
      <MapContainer
        formOutPut={FormOutPut}
        sideBar={
          <SideBar
            onChange={(e: ITab) => handleSideBarClick(e)}
            tabsSocialData={sideBarData}
          />
        }
      />
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
      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={<ModalFormFactory {...contentForm} />}
        theme={"modal"}
        headerText={"Тип файла"}
        bgModal={"black"}
      ></Modal>
    </Container>
  );
};
export { ReferencesContainer };
