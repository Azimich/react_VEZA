import { Container } from "../../../components/common/container";
import Styles from "../references/References.module.scss";
import { Tabs } from "../../../components/tabs";
import { tabsAboutData } from "../../../components/tabs/mockdata";
import { useRouter } from "next/router";
import { ITab } from "../../../components/tabs/Tabs";
import { aboutPath } from "../../../utils/bootstrap";

const ReferencesContainer = () => {
  const router = useRouter();

  const handleOnClickTabs = (e: ITab) => {
    router.push(aboutPath + e.url);
  };
  return (
    <Container className={"wrapper"}>
      <div className={Styles.references_container}>
        <Tabs
          props={tabsAboutData}
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
export { ReferencesContainer };
