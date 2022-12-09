import React, { useEffect, useState } from "react";
import { QuestionnairesItem } from "features/resources/tab_questionnaires/QuestionnairesItem";
import { Container } from "components/common/container";
import { Tabs } from "components/tabs";
import { tabsResourcesData } from "features/contacts/mockData";
import { handleOnClickTabs } from "../helper";
import { useRouter } from "next/router";
import Styles from "./QuestionnairesContainer.module.scss";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadResources } from "components/breadcrumbs/mockData";
import { questionnairesData } from "features/resources/mockData";

const QuestionnairesContainer = () => {
  const router = useRouter();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Опросные листы" }]);
  }, [dataBreadResources]);

  return (
    <Container className={"wrapper_clear"}>
      <BreadCrumbs data={breadCrumbs} />
      <div className={Styles.questionnaires__container}>
        <Tabs
          props={tabsResourcesData}
          onClick={(e) => {
            handleOnClickTabs(e, router);
          }}
          activeTab={5}
          size={"max"}
        />
        <div>
          {questionnairesData.map((item) => {
            return <QuestionnairesItem key={item.id} {...item} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export { QuestionnairesContainer };
