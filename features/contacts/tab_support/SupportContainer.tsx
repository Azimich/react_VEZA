import { useRouter } from "next/router";
import { ITab } from "../../../components/tabs/Tabs";
import { contactsPath } from "../../../utils/bootstrap";
import { Container } from "../../../components/common/container";
import Styles from "../tab_interaction/Interaction.module.scss";
import { Tabs } from "../../../components/tabs";
import { tabsContactsData } from "../mockData";
import { SupportForm } from "./SupportForm";
import { TitleTabs } from "../../../components/title_tabs";
import { SupportGroups } from "../tab_support/SupportGroups";
import { supportData } from "../tab_support/mockData";
import { EmailIcon, PhoneFooterIcon } from "components/icons";
import { Separator } from "components/separator";

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
        <a href={"tel:" + process.env.NEXT_PUBLIC_PHONE}>
          <PhoneFooterIcon />
          {process.env.NEXT_PUBLIC_PHONE}
        </a>
        <a href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL}>
          <EmailIcon />
          msk@veza.ru
        </a>
      </div>
      <Separator title={"Наши телеграм каналы"} />
      {supportData.map((item, i) => {
        return <SupportGroups key={i} {...item} />;
      })}
    </Container>
  );
};

export { SupportContainer };
