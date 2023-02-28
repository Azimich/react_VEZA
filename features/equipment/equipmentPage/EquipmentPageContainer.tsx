import { Container } from "components/common/container";
import { FC, useEffect } from "react";
import { ICategoriesItem, ICategoriesResponseArray } from "../Equipment";

import { Menu } from "../menu/Menu";
import Styles from "../Equipment.module.scss";
import { SliderContainer } from "components/slider";
import { UtpContainer } from "./utp/UtpContainer";
import { Separator } from "components/separator";
/*import {Equipment} from "components/equipment";*/
import { IEquipmentResponse } from "features/equipment/equipmentPage/Equipment";
import { ISlideItem } from "components/slider/Slider.d";
import { useGetAddEquip } from "service/list/getAddEquip";
/*import {IBannerResponseArray, IIndustriesResponse} from "features/news/News";*/
/*
import {ISlideItem} from "components/slider/Slider.d";
*/

const EquipmentPageContainer: FC<{
  data: ICategoriesItem[];
  categories: ICategoriesResponseArray;
  alias: string;
  alias_active?: string;
  product: IEquipmentResponse;
}> = ({ data, categories, alias, product }) => {
  const { getAddEquip } = useGetAddEquip();
  const convert = (data: IEquipmentResponse) => {
    return data?.response.images.map((e): ISlideItem => {
      return {
        alt: product.response.title,
        images: {
          pc: e?.pc,
          ipad: e?.ipad,
          mobile: e?.mobile,
        },
        link_slider: false,
        title: product.response.title,
        typeSlider: "img",
        url: product.response.alias,
      };
    });
  };

  useEffect(() => {
    getAddEquip(product?.response?.alias).then((res) => {
      console.log("asd", res);
    });
  }, []);

  return (
    <Container className={"wrapper"}>
      <div className={Styles.equipment__container}>
        <Menu categories={categories?.response} data={data} alias={alias} />
        <div className={Styles.content_box}>
          <h1 className={Styles.h1}>{product.response.title}</h1>
          {product && (
            <SliderContainer
              items={convert(product)}
              theme={"pageProduct"}
              dots={true}
              autoplay={false}
            />
          )}
          <div></div>
          <UtpContainer {...product.response} />
        </div>
      </div>
      <Separator title={"Дополнительное оборудование"} />
      {/*            <Equipment props={equipmentData}/>*/}
    </Container>
  );
};
export { EquipmentPageContainer };
