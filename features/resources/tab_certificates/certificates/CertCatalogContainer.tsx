import React, { useState, useEffect } from "react";
import { CertificatItem } from "./CertificatItem";
import Styles from "../Certificates.module.scss";
import { Container } from "components/common/container";
import { useRouter } from "next/router";
import { dataBreadResources } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { resourcesPath } from "utils/bootstrap";
import { useGetCertificatesItem } from "service/item/getSertificates";
import { ICertResponseArray } from "features/resources/tab_bim/Bim";

const CertCatalogContainer = () => {
  const router = useRouter();
  const [certificatesData, setCertificatesData] =
    useState<ICertResponseArray>();
  const { getCertificatesItem } = useGetCertificatesItem();

  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);

  useEffect(() => {
    setBreadCrumbs((prevData) => [
      ...prevData,
      {
        title: "Категория сертификатов",
        alias: resourcesPath + "certificates",
      },
    ]);
    setBreadCrumbs((prevData) => [...prevData, { title: "Сертификаты" }]);
  }, [dataBreadResources]);
  useEffect(() => {
    getCertificatesItem(router.query.alias as string).then(
      (data: ICertResponseArray) => {
        setCertificatesData(data);
      },
    );
  }, []);
  console.log("!11", certificatesData);
  return (
    <Container className={"wrapper_clear no_padding"}>
      <BreadCrumbs data={breadCrumbs} />
      <div className={Styles.sertificates__page__items}>
        {certificatesData &&
          certificatesData.response.map((item) => (
            <CertificatItem key={item.id} {...item} />
          ))}
      </div>
    </Container>
  );
};

export { CertCatalogContainer };
