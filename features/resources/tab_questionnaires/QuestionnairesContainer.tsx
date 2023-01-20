import React, { FC, useEffect, useState } from "react";
import { QuestionnairesItem } from "features/resources/tab_questionnaires/QuestionnairesItem";
import { Container } from "components/common/container";
import { Tabs } from "components/tabs";
import { tabsResourcesData } from "features/contacts/mockData";
import { handleOnClickTabs } from "../helper";
import { useRouter } from "next/router";
import Styles from "./QuestionnairesContainer.module.scss";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadResources } from "components/breadcrumbs/mockData";
import { IQuestionSSR } from "pages/resources/questionnaires/[alias]";
import { questionnairesData } from "features/resources/mockData";
import { IQuestionnaires } from "features/resources/tab_bim/Bim";
import { checkEmptyObject } from "utils/helpers";
import {
  FirstForm,
  SecondForm,
  ThirdForm,
  FourthForm,
  FifthForm,
  SixthForm,
  SeventhForm,
  EighthForm,
  NinthForm,
  TenthForm,
  EleventhForm,
  TwelfthForm,
  ThirteenthForm,
  FourteenthForm,
  FifteenthForm,
  SixteenthForm,
} from "features/resources/tab_questionnaires/questionnairesForms";

const QuestionnairesContainer: FC<IQuestionSSR> = ({ item }) => {
  const router = useRouter();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);
  const [parent, setParent] = useState<IQuestionnaires[]>([]);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Опросные листы" }]);
  }, [dataBreadResources]);

  useEffect(() => {
    if (checkEmptyObject(router.query)) {
      setParent(questionnairesData.filter((parent) => parent.parent === 0));
    } else {
      setParent(item);
    }
  }, [router.query]);

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
        {/*Форму вывел сюда, пока пути не настроены*/}
        <SixteenthForm />
        <FifteenthForm />
        <FourteenthForm />
        <ThirteenthForm />
        <TwelfthForm />
        <EleventhForm />
        <TenthForm />
        <NinthForm />
        <EighthForm />
        <SeventhForm />
        <SixthForm />
        <FifthForm />
        <FourthForm />
        <ThirdForm />
        <SecondForm />
        <FirstForm />

        {parent &&
          parent?.map((item) => <QuestionnairesItem key={item.id} {...item} />)}
      </div>
    </Container>
  );
};

export { QuestionnairesContainer };
