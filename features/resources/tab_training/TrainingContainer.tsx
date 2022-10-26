import { useRouter } from "next/router";
import { ITab } from "../../../components/tabs/Tabs";
import { resourcesPath } from "../../../utils/bootstrap";
import { Container } from "../../../components/common/container";
import Styles from "./Training.module.scss";
import { Tabs } from "../../../components/tabs";
import { tabsResourcesData } from "../../../components/tabs/mockdata";

const TrainingContainer = () => {
  const router = useRouter();

  const handleOnClickTabs = (e: ITab) => {
    router.push(resourcesPath + e.url);
  };
  return (
    <Container className={"wrapper"}>
      <div className={Styles.training_container}>
        <Tabs
          props={tabsResourcesData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={6}
          size={"max"}
        />
      </div>
      training OK
    </Container>
  );
};
export { TrainingContainer };
