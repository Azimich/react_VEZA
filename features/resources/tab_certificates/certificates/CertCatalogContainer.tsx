import React from "react";
import { CertificatItem } from "./CertificatItem";
import Styles from "../Certificates.module.scss";
import { sertificatesData } from "features/resources/mockData";
import { Container } from "components/common/container";
import { useRouter } from "next/router";
import { useEffect } from "react";

const CertCatalogContainer = () => {
  const router = useRouter();
  sertificatesData.filter((item) => item.alias === router.query.alias);
  const id = sertificatesData.filter(
    (item) => item.alias === router.query.alias
  )[0].id;
  const arr = sertificatesData.filter((item) => item.parent === id);

  return (
    <Container className={"wrapper_clear no_padding"}>
      <div className={Styles.sertificates__page__items}>
        {arr.map((item) => (
          <CertificatItem key={item.id} {...item} />
        ))}
      </div>
    </Container>
  );
};

export { CertCatalogContainer };
