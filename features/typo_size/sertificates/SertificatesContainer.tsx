import { FC, useEffect, useState } from "react";
import Styles from "./Sertificates.module.scss";
import { ISertificatesData } from "./Sertificates";
import { SertificatesData } from "./mockData";
import { SertificateItem } from "./SertificateItem";
import { useRouter } from "next/router";

const SertificatesContainer: FC<ISertificatesData> = () => {
  const router = useRouter();
  const [sertificate, setSertificate] = useState<ISertificatesData[]>([]);
  useEffect(() => {
    setSertificate(
      SertificatesData.filter((e) => e.product_url === router.query.id),
    );
  }, []);
  return (
    <div className={Styles.sertificates_container}>
      {sertificate.map((e) => {
        return <SertificateItem {...e} />;
      })}
    </div>
  );
};

export { SertificatesContainer };
