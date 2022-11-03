import { useRouter } from "next/router";
import { ITab } from "../../../components/tabs/Tabs";
import { contactsPath } from "../../../utils/bootstrap";
import { Container } from "../../../components/common/container";
import Styles from "../tab_interaction/Interaction.module.scss";
import { Tabs } from "../../../components/tabs";
import { tabsContactsData } from "../../../components/tabs/mockdata";
import { SupportForm } from "./SupportForm";
import { TitleTabs } from "../../../components/title_tabs";
import { SupportGroups } from "./SupportGroups";
import { supportData } from "./mockData";
import { Email, PhoneFooterIcon } from "components/icons";

const SupportContainer = () => {
  const router = useRouter();
  const handleOnClickTabs = (e: ITab) => {
    router.push(contactsPath + e.url);
  };

  return (
    <Container className={"wrapper"}>
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

      <div className={Styles.support__phone}>
        <a href="tel: +7 999 999 99 99">
          <PhoneFooterIcon />
          +7 999 999 99 99
        </a>
        <a href="msk@veza.ru">
          <Email />
          msk@veza.ru
        </a>
      </div>

      {supportData.map((item, i) => {
        return <SupportGroups key={i} {...item} />;
      })}
    </Container>
  );
};

export { SupportContainer };
