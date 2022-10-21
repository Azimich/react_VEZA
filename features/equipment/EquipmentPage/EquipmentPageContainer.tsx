import { Container } from "../../../components/common/container";
import { Menu } from "../menu/Menu";
import Styles from "../Equipment.module.scss";
import { SliderContainer } from "../../../components/slider";
import { useRouter } from "next/router";
import { CatalogData } from "../mockData";
import { FC, useEffect, useState } from "react";
import { ICatalogData } from "../Equipment";

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
        {productItem.length > 0 && (
          <SliderContainer
            theme={"pageProduct"}
            size={"context"}
            dots={true}
            items={productItem.shift().imgSlider}
          />
        )}
      </div>
    </Container>
  );
};
export { EquipmentPageContainer };
