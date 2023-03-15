import React, { FC, useEffect, useState } from "react";
import Styles from "./Equipment.module.scss";
import { Container } from "components/common/container";
import { Menu } from "./menu/Menu";
import { ICategoriesItem, ICategoriesResponseArray } from "./Equipment";
import { Catalog } from "features/equipment/catalog/Catalog";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadEquipment } from "components/breadcrumbs/mockData";

interface IProps {
  data?: ICategoriesItem[];
  categories?: ICategoriesResponseArray;
  alias?: string;
  products?: [];
}

const EquipmentContainer: FC<IProps> = ({
  data,
  categories,
  alias,
  products = [],
}) => {
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadEquipment);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Каталог продукции" }]);
  }, [dataBreadEquipment]);

  return (
    <Container className={"wrapper_clear"}>
      <BreadCrumbs data={breadCrumbs} />
      <div className={Styles.equipment__container}>
        {categories?.response && (
          <Menu categories={categories?.response} data={data} alias={alias} />
        )}
        <Catalog
          data={products.length > 0 ? products : data}
          categories={categories?.response}
        />
      </div>
    </Container>
  );
};

export { EquipmentContainer };
