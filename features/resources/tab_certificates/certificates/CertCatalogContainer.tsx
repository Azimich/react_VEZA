import React from "react";
import { CertificatItem } from "./CertificatItem";
import Styles from "../Certificates.module.scss";
import { certificatesData } from "features/resources/mockData";
import { Container } from "components/common/container";
import { useRouter } from "next/router";
import { useEffect } from "react";

const CertCatalogContainer = () => {
  const router = useRouter();
  certificatesData.filter((item) => item.alias === router.query.alias);
  const id = certificatesData.filter(
    (item) => item.alias === router.query.alias
  )[0].id;
  const arr = certificatesData.filter((item) => item.parent === id);

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
