import { useRouter } from "next/router";
import { ITab } from "../../../components/tabs/Tabs";
import { resourcesPath } from "../../../utils/bootstrap";
import { Container } from "../../../components/common/container";
import Styles from "./Catalog.module.scss";
import { Tabs } from "../../../components/tabs";
import { tabsResourcesData } from "../../contacts/mockData";
import { catalogData } from "../mockData";
import { CatalogItem } from "./CatalogItem";

const CatalogContainer = () => {
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
          activeTab={2}
          size={"max"}
        />
      </div>
      <div>
        {catalogData &&
          catalogData.map((e) => {
            return <CatalogItem {...e} key={e.id} />;
          })}
      </div>
    </Container>
  );
};
export { CatalogContainer };
