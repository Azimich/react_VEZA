import { useRouter } from "next/router";
import { ITab } from "../../../components/tabs/Tabs";
import { aboutPath } from "../../../utils/bootstrap";
import { Container } from "../../../components/common/container";
import Styles from "../job/Job.module.scss";
import { Tabs } from "../../../components/tabs";
import { tabsAboutData } from "../../../components/tabs/mockdata";

const JobContainer = () => {
  const router = useRouter();

  const handleOnClickTabs = (e: ITab) => {
    router.push(aboutPath + e.url);
  };
  return (
    <Container className={"wrapper"}>
      <div className={Styles.job_container}>
        <Tabs
          props={tabsAboutData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={3}
          size={"max"}
        />
      </div>
    </Container>
  );
};
export { JobContainer };
