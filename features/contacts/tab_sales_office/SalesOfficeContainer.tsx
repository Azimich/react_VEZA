import { Tabs } from "../../../components/tabs";
import { tabsContactsData } from "../../../components/tabs/mockdata";
import { Container } from "../../../components/common/container";
import { ITab } from "../../../components/tabs/Tabs";
import { contactsPath } from "../../../utils/bootstrap";
import { useRouter } from "next/router";
import Styles from "./SalesOffice.module.scss";
import { SerchContainer } from "./serch/SerchContainer";

const SalesOfficeContainer = () => {
  const router = useRouter();

  const handleOnClickTabs = (e: ITab) => {
    router.push(contactsPath + e.url);
  };

  return (
    <Container className={"wrapper"}>
      <div className={Styles.sales_office_container}>
        <Tabs
          props={tabsContactsData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={1}
          size={"max"}
        />
      </div>

      <SerchContainer />
    </Container>
  );
};

export { SalesOfficeContainer };
