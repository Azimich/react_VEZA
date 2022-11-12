import { ITab } from "components/tabs/Tabs";
import { Container } from "components/common/container";
import { Tabs } from "components/tabs";
import { tabsAboutData } from "../../contacts/mockData";
import { useRouter } from "next/router";
import { aboutPath } from "utils/bootstrap";
import Styles from "./Whowe.module.scss";
import { Achievements, WhoWeAbout } from "../index";
import { FactoryIcon, HistoryIcon, HistoryMobileIcon } from "components/icons";
import { Separator } from "components/separator";
import React, { FC, ReactNode, useState } from "react";
import { Modal, useModal } from "components/modal";
import { IObjectItem } from "components/map/Map";
import { Map } from "components/map";
import { ModalFormFactory } from "./ModalFormFactory";
import { whoweData } from "../mockData";
import { ObjectItem } from "../ObjectItem";

const WhoWeContainer: FC = () => {
  const [contentForm, setContentForm] = useState<IObjectItem>();
  const { isShow, toggle } = useModal();
  const router = useRouter();

  const FormOutPut: ReactNode[] = whoweData.map((e) => {
    return (
      <ObjectItem
        {...e}
        onClick={(e: IObjectItem, alias: string) =>
          handleOnClickModal(e, alias)
        }
        key={"fac" + e.id}
        icon={<FactoryIcon />}
      />
    );
  });

  const handleOnClickTabs = (e: ITab) => {
    router.push(aboutPath + e.url);
  };

  const handleOnClickModal = (e: IObjectItem, alias: string) => {
    e.alias = alias;
    setContentForm(e);
    toggle();
  };

  return (
    <Container className={"wrapper"}>
      <div className={Styles.whowe_container}>
        <Tabs
          props={tabsAboutData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={1}
          size={"max"}
        />
      </div>
      <div>
        <Map formOutPut={FormOutPut} />
      </div>
      <WhoWeAbout />
      <div className={Styles.whowe_container_history_svg}>
        <span className={Styles.whowe_container_history_svg_pc}>
          <HistoryIcon />
        </span>
        <span className={Styles.whowe_container_history_svg_mobile}>
          <HistoryMobileIcon />
        </span>
      </div>
      <div className={Styles.whowe_container_video}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Fc1rEkIzOS4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Separator title={"наши достижения"} />
      <Achievements />
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

export { WhoWeContainer };
