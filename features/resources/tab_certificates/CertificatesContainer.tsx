import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ITab } from "components/tabs/Tabs";
import { resourcesPath } from "utils/bootstrap";
import { Container } from "components/common/container";
import Styles from "./Certificates.module.scss";
import { Tabs } from "components/tabs";
import { tabsResourcesData } from "../../contacts/mockData";
import { CertificateItem } from "./CertificateItem";
import { SertificatesData } from "features/typo_size/sertificates/mockData";
import { dataBreadResources } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";

const CertificatesContainer = () => {
  const router = useRouter();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Сертификаты" }]);
  }, [dataBreadResources]);

  const handleOnClickTabs = (e: ITab) => {
    router.push(resourcesPath + e.url);
  };

  return (
    <Container className={"wrapper_clear no_padding"}>
      <BreadCrumbs data={breadCrumbs} />

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
