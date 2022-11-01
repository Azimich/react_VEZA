import { useRouter } from "next/router";
import { ITab } from "../../../components/tabs/Tabs";
import { aboutPath } from "../../../utils/bootstrap";
import { Container } from "../../../components/common/container";
import Styles from ".//Job.module.scss";
import { Tabs } from "../../../components/tabs";
import { tabsAboutData } from "../../../components/tabs/mockdata";
import { MockJob } from "./mockJob";
import { JobItem } from "./JobItem";
import { Separator } from "../../../components/separator";
import { SelectorContainer } from "../../../components/selector/SelectorContainer";
import { Button } from "components/button";
import { MapContainer } from "../../../components/map/MapContainer";

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
      <div className={Styles.vacancies__search_box}>
        <SelectorContainer />
        <Button type={"button"}>Поиск</Button>
      </div>
      <MapContainer />
      <Separator title={"наши вакансии"} />
      <ul className={Styles.job_container_item}>
        {MockJob.map((e) => {
          return <JobItem {...e} key={e.id} />;
        })}
      </ul>
    </Container>
  );
};
export { JobContainer };
