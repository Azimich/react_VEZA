import { FC } from "react";
import Styles from "./Equipment.module.scss";
import { Container } from "../../components/common/container";
import { Menu } from "./menu/Menu";
import { Catalog } from "./catalog/Catalog";
import { ICatalogData } from "./Equipment";

const EquipmentContainer: FC<{ data: ICatalogData[] }> = ({ data }) => {
  return (
    <Container className={"wrapper"}>
      <div className={Styles.equipment__container}>
        <Menu />
        <Catalog data={data} />
      </div>
    </Container>
  );
};

export { EquipmentContainer };
