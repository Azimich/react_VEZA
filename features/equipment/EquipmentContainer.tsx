import { FC } from "react";
import Styles from "./Equipment.module.scss";
import { Container } from "../../components/common/container";
import { Menu } from "./menu/Menu";
import { Catalog } from "./catalog/Catalog";

const EquipmentContainer: FC = () => {
  return (
    <Container className={"wrapper"}>
      <div className={Styles.equipment__container}>
        <Menu />

        <Catalog />
      </div>
    </Container>
  );
};

export { EquipmentContainer };
