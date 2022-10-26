import { Container } from "../../../components/common/container";
import Styles from "./Bim.module.scss";
import { Tabs } from "../../../components/tabs";
import { tabsResourcesData } from "../../../components/tabs/mockdata";

import { useRouter } from "next/router";
import { ITab } from "../../../components/tabs/Tabs";
import { resourcesPath } from "../../../utils/bootstrap";

const BimContainer = () => {
  const router = useRouter();

  const handleOnClickTabs = (e: ITab) => {
    router.push(resourcesPath + e.url);
  };
  return (
    <Container className={"wrapper"}>
      <div className={Styles.bim_container}>
        <Tabs
          props={tabsResourcesData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={1}
          size={"max"}
        />
      </div>
      BIM OK
    </Container>
  );
};

export { BimContainer };
