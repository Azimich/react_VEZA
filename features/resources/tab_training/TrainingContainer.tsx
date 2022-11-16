import { useRouter } from "next/router";
import { ITab } from "components/tabs/Tabs";
import { resourcesPath } from "utils/bootstrap";
import { Container } from "components/common/container";
import Styles from "./Training.module.scss";
import { Tabs } from "components/tabs";
import { tabsResourcesData } from "../../contacts/mockData";
import { TraningItem } from "./TraningItem";
import React, { useEffect, useState } from "react";
import { dataBreadResources } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";

const TrainingContainer = () => {
  const router = useRouter();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "BIM" }]);
  }, [dataBreadResources]);

  const handleOnClickTabs = (e: ITab) => {
    router.push(resourcesPath + e.url);
  };
  return (
    <Container className={"wrapper_clear no_padding"}>
      <BreadCrumbs data={breadCrumbs} />
      <div className={Styles.training_container}>
        <Tabs
          props={tabsResourcesData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={6}
          size={"max"}
        />
      </div>
      <TraningItem />
    </Container>
  );
};
export { TrainingContainer };
