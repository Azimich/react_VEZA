import Styles from "./Interaction.module.scss";
import { Tabs } from "../../../components/tabs";
import { tabsContactsData } from "../mockData";
import { Container } from "../../../components/common/container";
import { ITab } from "../../../components/tabs/Tabs";
import { contactsPath } from "utils/bootstrap";
import { useRouter } from "next/router";
import { InteractionData } from "./InteractionData";
import { Interaction } from "./Interaction";
import { InteractionItem } from "./InteractionItem";
import { TitleTabs } from "../../../components/title_tabs";
import { Pagination } from "components/pagination/Pagination";

const InteractionContainer = () => {
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
          activeTab={2}
          size={"max"}
        />
      </div>
      <TitleTabs
        title={"СВЯЖИТЕСЬ С НАМИ"}
        desc={
          "Чтобы получить ответы на ваши вопросы и быть в курсе всего происходящего"
        }
      />
      <h3 className={Styles.interaction_container_h3}>Наши отделы продаж</h3>
      <ul className={Styles.interaction_items}>
        {InteractionData.filter((e) => e.type === "sales").map(
          (e: Interaction) => {
            return <InteractionItem {...e} key={e.id} />;
          }
        )}
      </ul>
      <Pagination currentPage={1} totalPageCount={20} pageSize={3} />
      <h3 className={Styles.interaction_container_h3}>Наши заводы</h3>
      <ul className={Styles.interaction_items}>
        {InteractionData.filter((e) => e.type === "factory").map(
          (e: Interaction) => {
            return <InteractionItem {...e} key={e.id} />;
          }
        )}
      </ul>
    </Container>
  );
};

export { InteractionContainer };
