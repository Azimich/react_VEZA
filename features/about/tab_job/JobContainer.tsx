import { useRouter } from "next/router";
import { ITab } from "components/tabs/Tabs";
import { aboutPath } from "utils/bootstrap";
import { Container } from "components/common/container";
import Styles from "./Job.module.scss";
import { Tabs } from "components/tabs";
import { tabsAboutData, tabsJobData } from "../../contacts/mockData";
import { jobGalleryData, jobObject, MockJob } from "./mockJob";
import { JobItem } from "./JobItem";
import { Separator } from "components/separator";
import { SelectContainer } from "components/select/SelectContainer";
import { Button } from "components/button";
import { Map } from "components/map";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { IObject } from "components/map/Map";
import { ObjectItem } from "../ObjectItem";
import { SideBar } from "components/map/SideBar";
import { Modal, useModal } from "components/modal";
import { ModalFormJob } from "features/about";
import { ModalFormGallery } from "features/about/tab_job/jobModal/ModalFormGalery";
import { BreadCrumbs } from "components/breadcrumbs";
import { dataBreadAbout } from "components/breadcrumbs/mockData";

const JobContainer: FC = () => {
  const [sideBarData] = useState(tabsJobData);
  const [selectedCheckBox, setSelectedCheckBox] = useState<ITab[]>([]);
  const [selectedReferenceData, setSelectedReferenceData] = useState<IObject[]>(
    []
  );
  const { isShow: isShowGallery, toggle: toggleGallery } = useModal();
  const { isShow, toggle } = useModal();

  const router = useRouter();
  const handleOnClickModal = () => {
    toggleGallery();
  };

  useEffect(() => {
    setSelectedReferenceData(
      jobObject.filter(
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
        onClick={() => handleOnClickModal()}
        key={"job" + e.id}
        icon={<div className={Styles.job_count}>{e.count}</div>}
      />
    );
  });

  const handleSideBarClick = (e: ITab) => {
    setSelectedCheckBox(
      selectedCheckBox.filter((item) => item.id === e.id).length > 0
        ? selectedCheckBox.filter((item) => item.id !== e.id)
        : [...selectedCheckBox, e]
    );
  };

  const handleOnClickTabs = (e: ITab) => {
    router.push(aboutPath + e.url);
  };

  return (
    <Container className={"wrapper_clear"}>
      <BreadCrumbs data={dataBreadAbout} />
      <div className={Styles.job_container}>
        <Tabs
          props={tabsAboutData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={3}
          size={"max"}
        />
      </div>
      <Map
        formOutPut={FormOutPut}
        sideBar={
          <SideBar
            onChange={(e: ITab) => handleSideBarClick(e)}
            tabsSocialData={sideBarData}
          />
        }
      />

      <div className={Styles.vacancies__search_box}>
        <SelectContainer optionsData={[]} />
        <Button type={"button"} children={"Поиск"} />
      </div>
      <div className={Styles.separator__title__container}>
        <Separator title={"наши вакансии"} />
      </div>
      <ul className={Styles.job_container_item}>
        {MockJob.map((e) => {
          return <JobItem {...e} key={e.id} />;
        })}
      </ul>
      <div className={Styles.vacancies__bottom_info}>
        <Separator title={"НЕ НАШЛИ ПОДХОДЯЩУЮ ВАКАНСИЮ?"} />
        <p>
          Присылайте нам свое резюме, и мы свяжемся с Вами, как только появится
          подходящая позиция для Вас!
        </p>
        <Button onClick={toggle} size={"max"} children={"Отправить резюме"} />
      </div>
      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={<ModalFormJob />}
        theme={"modal"}
        bgModal={"black"}
      />
      <Modal
        isShow={isShowGallery}
        hide={toggleGallery}
        modalContent={<ModalFormGallery items={jobGalleryData.items} />}
        theme={"empty_modal"}
        bgModal={"black"}
      />
    </Container>
  );
};
export { JobContainer };
