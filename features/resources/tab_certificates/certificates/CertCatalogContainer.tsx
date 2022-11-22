import React, { useState, useEffect } from "react";
import { CertificatItem } from "./CertificatItem";
import Styles from "../Certificates.module.scss";
import { certificatesData } from "features/resources/mockData";
import { Container } from "components/common/container";
import { useRouter } from "next/router";
import { dataBreadResources } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { resourcesPath } from "utils/bootstrap";

const CertCatalogContainer = () => {
  const router = useRouter();
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

  certificatesData.filter((item) => item.alias === router.query.alias);
  const id = certificatesData.filter(
    (item) => item.alias === router.query.alias
  )[0].id;
  const arr = certificatesData.filter((item) => item.parent === id);

  return (
    <Container className={"wrapper_clear no_padding"}>
      <BreadCrumbs data={breadCrumbs} />
      <div className={Styles.sertificates__page__items}>
        {arr.map((item) => (
          <CertificatItem key={item.id} {...item} />
        ))}
      </div>
    </Container>
  );
};

export { CertCatalogContainer };
