import { useRouter } from "next/router";

import { ITab } from "../../../components/tabs/Tabs";
import { resourcesPath } from "../../../utils/bootstrap";
import { Container } from "../../../components/common/container";
import Styles from "./Questions.module.scss";
import { Tabs } from "../../../components/tabs";
import { tabsResourcesData } from "../../contacts/mockData";
import { QuestionsItem } from "./QuestionsItem";
import { questionsData } from "../mockData";

const QuestionsContainer = () => {
  const router = useRouter();

  const handleOnClickTabs = (e: ITab) => {
    router.push(resourcesPath + e.url);
  };
  return (
    <Container className={"wrapper"}>
      <div className={Styles.questions_container}>
        <Tabs
          props={tabsResourcesData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={3}
          size={"max"}
        />
      </div>
      {questionsData.map((item, i) => {
        return <QuestionsItem key={i} {...item} />;
      })}
    </Container>
  );
};
export { QuestionsContainer };
