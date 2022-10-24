import { Container } from "../../../components/common/container";
import { Menu } from "../menu/Menu";
import Styles from "../Equipment.module.scss";
import { FC } from "react";
import { ICatalogData } from "../Equipment";
import { SliderContainer } from "../../../components/slider";
import { UtpContainer } from "./utp/UtpContainer";

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
    </Container>
  );
};
export { EquipmentPageContainer };
