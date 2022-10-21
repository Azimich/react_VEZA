import { Container } from "../../../components/common/container";
import { Menu } from "../menu/Menu";
import Styles from "../Equipment.module.scss";
import { SliderContainer } from "../../../components/slider";
import { useRouter } from "next/router";
import { CatalogData } from "../mockData";
import { UtpContainer } from "./utp/UtpContainer";

const EquipmentPageContainer = () => {
  const router = useRouter();
  const productItem = CatalogData.filter((e) => e.alias === router.asPath);
  console.log("111", productItem);

  return (
    <>
      <SliderContainer items={productItem.shift().img} />
      <Container className={"wrapper"}>
        <div className={Styles.equipment__container}>
          <Menu />
          <UtpContainer />
        </div>
      </Container>
      ;
    </>
  );
};
export { EquipmentPageContainer };
