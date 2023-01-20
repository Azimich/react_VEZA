import { FC } from "react";
import Styles from "./Equipment.module.scss";
import { Container } from "components/common/container";
import { Menu } from "./menu/Menu";
import { ICategoriesItem, ICategoriesResponseArray } from "./Equipment";
import { Catalog } from "features/equipment/catalog/Catalog";

interface IProps {
  data?: ICategoriesItem[];
  categories?: ICategoriesResponseArray;
  alias?: string;
}

const EquipmentContainer: FC<IProps> = ({ data, categories, alias }) => {
  return (
    <Container className={"wrapper"}>
      <div className={Styles.equipment__container}>
        {categories?.response && (
          <Menu categories={categories?.response} data={data} alias={alias} />
        )}
        <Catalog data={data} />
      </div>
    </Container>
  );
};

export { EquipmentContainer };
