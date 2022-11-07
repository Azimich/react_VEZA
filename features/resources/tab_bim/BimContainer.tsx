import { Container } from "../../../components/common/container";
import Styles from "./Bim.module.scss";
import { Tabs } from "../../../components/tabs";
import { tabsResourcesData } from "../../contacts/mockData";

import { useRouter } from "next/router";
import { ITab } from "../../../components/tabs/Tabs";
import { resourcesPath } from "../../../utils/bootstrap";
import { BimItem } from "./";
import { bimData } from "../mockData";
import { Button } from "components/button";

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
      <div className={Styles.bim_banner}>
        <Button
          theme="banner"
          size={"large"}
          children={"Скачать модель"}
          type={"button"}
        />
      </div>
      <div className={Styles.bim__items}>
        {bimData.map((item, i) => {
          return <BimItem key={i} {...item} />;
        })}
      </div>
    </Container>
  );
};

export { BimContainer };
