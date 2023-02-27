import { useRouter } from "next/router";
import { ITab } from "components/tabs/Tabs";
import { contactsPath } from "utils/bootstrap";
import { Container } from "components/common/container";
import Styles from "../tab_interaction/Interaction.module.scss";
import { Tabs } from "components/tabs";
import { tabsContactsData } from "../mockData";
import { SupportForm } from "./SupportForm";
import { TitleTabs } from "components/title_tabs";
import { SupportGroups } from "features/contacts";
import { Separator } from "components/separator";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import React, { useEffect, useState } from "react";
import { dataBreadContacts } from "components/breadcrumbs/mockData";
import { useGetTelegram } from "service/list/getTelegram";
import {
  ITelegramItem,
  ITelegramResponse,
} from "features/contacts/tab_support/Support";

const SupportContainer = () => {
  const router = useRouter();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadContacts);
  const [telegram, setTelegram] = useState<ITelegramItem[]>([]);
  const { getTelegramData } = useGetTelegram();

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Техническая поддержка" }]);
  }, [dataBreadContacts]);

  //Данные по ТГ группам
  useEffect(() => {
    getTelegramData().then((data: ITelegramResponse) => {
      data && !data.hasError && setTelegram(data.response);
    });
  }, []);

  const handleOnClickTabs = (e: ITab) => {
    router.push(contactsPath + e.url).then();
  };

  return (
    <Container className={"wrapper_clear"}>
      <BreadCrumbs data={breadCrumbs} />

      <div className={Styles.interaction_container}>
        <Tabs
          props={tabsContactsData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={3}
          size={"max"}
        />
      </div>
      <TitleTabs
        title={"СВЯЖИТЕСЬ С НАМИ"}
        desc={
          "Чтобы получить ответы на ваши вопросы и быть в курсе всего происходящего"
        }
      />
      <SupportForm />
      <Separator title={"Наши телеграм каналы"} />
      <div className={Styles.telegram__group__container}>
        {telegram.map((item, i) => {
          return <SupportGroups key={i} {...item} />;
        })}
      </div>
    </Container>
  );
};

export { SupportContainer };
