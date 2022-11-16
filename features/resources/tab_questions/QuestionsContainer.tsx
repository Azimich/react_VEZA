import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

import { ITab } from "components/tabs/Tabs";
import { resourcesPath } from "utils/bootstrap";
import { Container } from "components/common/container";
import Styles from "./Questions.module.scss";
import { Tabs } from "components/tabs";
import { tabsResourcesData } from "../../contacts/mockData";
import { QuestionsItem } from "./QuestionsItem";
import { questionsData } from "../mockData";
import { IQuestions } from "../tab_bim/Bim";
import { Separator } from "components/separator";
import { dataBreadResources } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";

const QuestionsContainer: FC<IQuestions> = () => {
  const router = useRouter();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);

  const handleOnClickTabs = (e: ITab) => {
    router.push(resourcesPath + e.url);
  };
  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Вопросы" }]);
  }, [dataBreadResources]);

  return (
    <Container className={"wrapper_clear no_padding"}>
      <BreadCrumbs data={breadCrumbs} />

      <div className={Styles.questions_container}>
        <Tabs
          props={tabsResourcesData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={3}
          size={"max"}
        />
      </div>
      <div className={Styles.title}>
        <Separator title={"Часто задаваемые вопросы"} />
        <p>Здесь вы сможете найти ответы на часто задаваемые и не только</p>
      </div>
      {questionsData.map((item, i) => {
        return <QuestionsItem key={i} {...item} />;
      })}
    </Container>
  );
};

export { QuestionsContainer };
