import { Container } from "../../../components/common/container";
import { Menu } from "../menu/Menu";
import Styles from "../Equipment.module.scss";
import { FC } from "react";
import { ICatalogData } from "../Equipment";
import { SliderContainer } from "../../../components/slider";
import { UtpContainer } from "./utp/UtpContainer";
import { Separator } from "../../../components/separator";
import { Equipment } from "../../../components/equipment";
import { equipmentData } from "../../../components/equipment/mockData";

interface IPageData {
  data?: ICatalogData[];
}

const EquipmentPageContainer: FC<IPageData> = ({ data }) => {
  return (
    <Container className={"wrapper"}>
      <div className={Styles.equipment__container}>
        <Menu />
        <>
          {data && (
            <SliderContainer
              items={data[0]?.imgSlider}
              theme={"pageProduct"}
              dots={true}
              autoplay={false}
            />
          )}
          <div></div>
          <UtpContainer />
        </>
      </div>
      <Separator title={"Дополнительное оборудование"} />
      <Equipment props={equipmentData} />
    </Container>
  );
};
export { EquipmentPageContainer };
