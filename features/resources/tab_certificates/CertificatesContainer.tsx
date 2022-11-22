import React, { useEffect, useState } from "react";
import { Container } from "components/common/container";
import Styles from "./Certificates.module.scss";
import { Tabs } from "components/tabs";
import { tabsResourcesData } from "../../contacts/mockData";
import { CertificateItem } from "./CertificateItem";
import { dataBreadResources } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { certificatesData as certificatesData } from "../mockData";
import { handleOnClickTabs } from "../helper";
import { useRouter } from "next/router";

const CertificatesContainer = () => {
  const router = useRouter();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Сертификаты" }]);
  }, [dataBreadResources]);

  return (
    <Container className={"wrapper_clear no_padding"}>
      <BreadCrumbs data={breadCrumbs} />

      <div className={Styles.certificates_container}>
        <Tabs
          props={tabsResourcesData}
          onClick={(e) => {
            handleOnClickTabs(e, router);
          }}
          activeTab={4}
          size={"max"}
        />
      </div>
      <div className={Styles.certificates__items}>
        {certificatesData
          .filter((parents) => parents.parent === 0)
          .map((item) => (
            <CertificateItem key={item.id} {...item} />
          ))}
      </div>
    </Container>
  );
};
export { CertificatesContainer };
