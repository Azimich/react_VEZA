import { Container } from "components/common/container";
import { Box_icon_social_container } from "components/box_icon_social";
import { SliderContainer } from "components/slider";
import {
  sliderData,
  sliderCategory,
  sliderIndustries,
} from "components/slider/mockData";
import { newsData } from "./news/mockData";
import { Separator } from "components/separator";
import { AboutContainer } from "./about/AboutContainer";
import { NewsContainer } from "./news";
import { SelectionContainer } from "./selection";
import { FC } from "react";
import Styles from "./about/About.module.scss";

const HomeContainer: FC = () => {
  return (
    <>
      <Container el="section">
        <div>
          <Box_icon_social_container />
        </div>
      </Container>
      <SliderContainer
        autoplay={false}
        items={sliderData.items}
        theme={"home"}
      />

      <div className={Styles.separator__title__container}>
        <Separator title={"О нас"} />
      </div>
      <AboutContainer />
      <Container className={`wrapper_clear`} el="section">
        <div className={Styles.separator__title__container}>
          <Separator title={"Категория продукции"} />
        </div>
        <SliderContainer
          items={sliderCategory.items}
          dots={true}
          autoplay={false}
          spaceBetween={10}
          theme={"homecategory"}
        />
        <div className={Styles.separator__title__container}>
          <Separator title={"Новости"} />
        </div>
        <NewsContainer props={newsData} />
        <div className={Styles.separator__title__container}>
          <Separator title={"Отрасли"} />
        </div>
        <SliderContainer
          items={sliderIndustries.items}
          dots={true}
          autoplay={false}
          theme={"industries"}
          themeButton={"industries"}
          size={"medium"}
          navigations={true}
          effectSlide={"cards"}
          color={"link"}
        />
        <div className={Styles.separator__title__bottom}>
          <Separator title={"Выполнить подбор необходимого оборудования?"} />
        </div>
        <SelectionContainer />
      </Container>
    </>
  );
};
export { HomeContainer };
