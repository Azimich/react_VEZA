import React from "react";
import { useRouter } from "next/router";

import { ITab } from "../../../components/tabs/Tabs";
import { resourcesPath } from "../../../utils/bootstrap";
import { Container } from "../../../components/common/container";
import Styles from "./Certificates.module.scss";
import { Tabs } from "../../../components/tabs";
import { tabsResourcesData } from "../../contacts/mockData";
import { CertificateItem } from "./CertificateItem";
import { SertificatesData } from "features/typo_size/sertificates/mockData";

const CertificatesContainer = () => {
  const router = useRouter();
  const handleOnClickTabs = (e: ITab) => {
    router.push(resourcesPath + e.url);
  };

  return (
    <Container className={"wrapper"}>
      <div className={Styles.certificates_container}>
        <Tabs
          props={tabsResourcesData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={4}
          size={"max"}
        />
      </div>
      <div className={Styles.certificates__items}>
        {SertificatesData.map((item, i) => {
          return <CertificateItem key={i} image={item.img} />;
        })}
      </div>
    </Container>
  );
};
export { CertificatesContainer };
