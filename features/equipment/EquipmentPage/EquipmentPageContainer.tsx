import { Container } from "../../../components/common/container";
import { Menu } from "../menu/Menu";
import Styles from "../Equipment.module.scss";
import { useRouter } from "next/router";
import { CatalogData } from "../mockData";
import { FC, useEffect, useState } from "react";
import { ICatalogData } from "../Equipment";
import { UtpContainer } from "./utp/UtpContainer";

const EquipmentPageContainer: FC = () => {
  const router = useRouter();
  const [productItem, setProductItem] = useState<ICatalogData[]>([]);

  useEffect(() => {
    console.log(
      "productItem",
      CatalogData.filter((e) => e.alias === router.asPath),
      productItem
    );
    setProductItem(CatalogData.filter((e) => e.alias === router.asPath));
  }, []);
  return (
    <Container className={"wrapper"}>
      <div className={Styles.equipment__container}>
        <Menu />
        <UtpContainer />
      </div>
    </Container>
  );
};
export { EquipmentPageContainer };
