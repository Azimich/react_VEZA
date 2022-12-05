import { Container } from "components/common/container";
import Styles from "./Doc.module.scss";
import { Tabs } from "components/tabs";
import { tabsResourcesData } from "../../contacts/mockData";
import { DocItem } from "./DocItem";
import React, { useEffect, useState } from "react";
import { dataBreadResources } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { handleOnClickTabs } from "../helper";
import { useRouter } from "next/router";

const DocContainer = () => {
  const router = useRouter();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "BIM" }]);
  }, [dataBreadResources]);

  return (
    <Container className={"wrapper wrapper_clear"}>
      <BreadCrumbs data={breadCrumbs} />
      <div className={Styles.doc_container}>
        <Tabs
          props={tabsResourcesData}
          onClick={(e) => {
            handleOnClickTabs(e, router);
          }}
          activeTab={5}
          size={"max"}
        />
      </div>
      <DocItem />
    </Container>
  );
};

export { DocContainer };
