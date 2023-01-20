import React, { FC, useEffect, useState } from "react";
import { Container } from "components/common/container";
import { Tabs } from "components/tabs";
import { tabsResourcesData } from "features/contacts/mockData";
import { handleOnClickTabs } from "../helper";
import { useRouter } from "next/router";
import Styles from "./QuestionnairesContainer.module.scss";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadResources } from "components/breadcrumbs/mockData";

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
import { IComponents } from "components/tabs/Tabs";

const QuestionnairesPage: FC = () => {
  const router = useRouter();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Опросные листы" }]);
  }, [dataBreadResources]);
  console.log("router", router.query.alias);

  const rend = () => {
    const components: IComponents = {
      form_1: FirstForm,
      form_2: SecondForm,
      form_3: ThirdForm,
      form_4: FourthForm,
      form_5: FifthForm,
      form_6: SixthForm,
      form_7: SeventhForm,
      form_8: EighthForm,
      form_9: NinthForm,
      form_10: TenthForm,
      form_11: EleventhForm,
      form_12: TwelfthForm,
      form_13: ThirteenthForm,
      form_14: FourteenthForm,
      form_15: FifteenthForm,
      form_16: SixteenthForm,
    };
    return React.createElement(components[`${router.query.alias}`]);
  };
  console.log("23213", rend());
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
        {rend()}
      </div>
    </Container>
  );
};

export { QuestionnairesPage };
