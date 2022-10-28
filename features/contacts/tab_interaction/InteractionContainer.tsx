import Styles from "./Interaction.module.scss";
import { Tabs } from "../../../components/tabs";
import { tabsContactsData } from "../../../components/tabs/mockdata";
import { Container } from "../../../components/common/container";
import { ITab } from "../../../components/tabs/Tabs";
import { contactsPath } from "../../../utils/bootstrap";
import { useRouter } from "next/router";

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
    </Container>
  );
};

export { InteractionContainer };
