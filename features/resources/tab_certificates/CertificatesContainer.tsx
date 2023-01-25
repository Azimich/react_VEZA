import React, { useEffect, useState } from "react";
import { Container } from "components/common/container";
import Styles from "./Certificates.module.scss";
import { Tabs } from "components/tabs";
import { tabsResourcesData } from "../../contacts/mockData";
import { CertificateItem } from "./CertificateItem";
import { dataBreadResources } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
//import {certificatesData as certificatesData} from "../mockData";
import { handleOnClickTabs } from "../helper";
import { useRouter } from "next/router";
import { ICertResponseArray } from "features/resources/tab_bim/Bim";
import { useGetSertificates } from "service/list/getSertificates";

const CertificatesContainer = () => {
  const router = useRouter();
  const [certificatesData, setCertificatesData] =
    useState<ICertResponseArray>(null);
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);
  const { getSertificates } = useGetSertificates();

  useEffect(() => {
    getSertificates().then((data: ICertResponseArray) => {
      setCertificatesData(data);
    });
  }, []);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Категория сертификатов" }]);
  }, [dataBreadResources]);

  return (
    <Container className={"wrapper_clear"}>
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
        {certificatesData?.response.map((item) => (
          <CertificateItem key={item.id} {...item} />
        ))}
      </div>
    </Container>
  );
};
export { CertificatesContainer };
