import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { Container } from "components/common/container";
import Styles from "./Bim.module.scss";
import { Tabs } from "components/tabs";
import { tabsResourcesData } from "../../contacts/mockData";
import { ITab } from "components/tabs/Tabs";
import { resourcesPath } from "utils/bootstrap";
import { BimItem } from "./";
import { bimData } from "../mockData";
import { Button } from "components/button";
import { Modal, useModal } from "components/modal";
import { ModalBim } from "./bimModal/ModalBim";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadResources } from "components/breadcrumbs/mockData";

const BimContainer = () => {
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);
  const router = useRouter();
  const handleOnClickTabs = (e: ITab) => {
    router.push(resourcesPath + e.url);
  };

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "BIM" }]);
  }, [dataBreadResources]);

  const { isShow, toggle } = useModal();

  return (
    <Container className={"wrapper_clear no_padding"}>
      <BreadCrumbs data={breadCrumbs} />
      <div className={Styles.bim_container}>
        <Tabs
          props={tabsResourcesData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={1}
          size={"max"}
        />
      </div>
      <div className={Styles.bim_banner}>
        <Button
          theme="banner"
          size={"large"}
          children={"Скачать модель"}
          type={"button"}
          onClick={toggle}
        />
      </div>

      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={<ModalBim />}
        theme={"modal"}
        headerText={"Тип файла"}
        bgModal={"black"}
      />

      <div className={Styles.bim__items}>
        {bimData.map((item, i) => {
          return <BimItem key={i} {...item} />;
        })}
      </div>
    </Container>
  );
};

export { BimContainer };
