import React, { useEffect, useState } from "react";
import { Container } from "components/common/container";
import Styles from "./Bim.module.scss";
import { Tabs } from "components/tabs";
import { tabsResourcesData } from "../../contacts/mockData";
import { BimItem, ModalBim } from "./";
import { Button } from "components/button";
import { Modal, useModal } from "components/modal";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadResources } from "components/breadcrumbs/mockData";
import { handleOnClickTabs } from "../helper";
import { useRouter } from "next/router";
import { useGetBim } from "service/list/getBim";
import { IBim, IBimResponseArray } from "features/resources/tab_bim/Bim";
import { useAppSelector } from "store/hooks";
import { getAuth } from "features/auth/AuthSlice";

const BimContainer = () => {
  const router = useRouter();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);
  const { getBimData } = useGetBim();
  const [bimData, setBimData] = useState<IBim[]>([]);
  const auth = useAppSelector(getAuth);
  const { isShow, toggle } = useModal();

  useEffect(() => {
    getBimData().then((data: IBimResponseArray) => {
      !data.hasError && setBimData(data.response);
    });
  }, []);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "BIM" }]);
  }, [dataBreadResources]);

  return (
    <Container className={"wrapper_clear"}>
      <BreadCrumbs data={breadCrumbs} />
      <div className={Styles.bim_container}>
        <Tabs
          props={tabsResourcesData}
          onClick={(e) => {
            handleOnClickTabs(e, router);
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
        theme={"full_modal"}
        bgModal={"white"}
      />

      <div className={Styles.bim__items}>
        {bimData.map((item, i) => {
          return (
            <BimItem key={i} {...item} showDownload={Boolean(auth?.data)} />
          );
        })}
      </div>
    </Container>
  );
};

export { BimContainer };
