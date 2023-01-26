import React, { FC, useEffect, useState } from "react";
import { Container } from "components/common/container";
import Styles from "./Questions.module.scss";
import { Tabs } from "components/tabs";
import { tabsResourcesData } from "../../contacts/mockData";
import { QuestionsItem } from "./QuestionsItem";
import { IQuestions, IQuestionsResponseArray } from "../tab_bim/Bim";
import { Separator } from "components/separator";
import { dataBreadResources } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { handleOnClickTabs } from "../helper";
import { useRouter } from "next/router";
import { useQuestions } from "service/list/getQuestions";
import { SpinnerLoading } from "components/spinners";

const QuestionsContainer: FC<IQuestions> = () => {
  const [questionsData, setQuestionsData] = useState<IQuestions[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getQuestions } = useQuestions();
  useEffect(() => {
    getQuestions().then((data: IQuestionsResponseArray) => {
      !data.hasError && setQuestionsData(data.response);
    });
    setIsLoading(false);
  }, []);
  console.log("questionsData", questionsData);
  const router = useRouter();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Вопросы" }]);
  }, [dataBreadResources]);

  return (
    <Container className={"wrapper_clear"}>
      <BreadCrumbs data={breadCrumbs} />
      <div className={Styles.questions_container}>
        <Tabs
          props={tabsResourcesData}
          onClick={(e) => {
            handleOnClickTabs(e, router);
          }}
          activeTab={3}
          size={"max"}
        />
      </div>
      <div className={Styles.title}>
        <Separator title={"Часто задаваемые вопросы"} />
        <p>Здесь вы сможете найти ответы на часто задаваемые вопросы</p>
      </div>
      {isLoading ? (
        <div className={Styles.loading_container}>
          <SpinnerLoading />
        </div>
      ) : (
        <ul className={Styles.questions__accordion__container}>
          {questionsData.map((item, i) => {
            return <QuestionsItem key={i} {...item} />;
          })}
        </ul>
      )}
    </Container>
  );
};

export { QuestionsContainer };
