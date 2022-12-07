import { Container } from "components/common/container";
import { Box_icon_social_container } from "components/box_icon_social";
import { SliderContainer } from "components/slider";
import {
  sliderData,
  sliderCategory,
  sliderIndustries,
} from "components/slider/mockData";
import { Separator } from "components/separator";
import { AboutContainer } from "./about/AboutContainer";
import { NewsContainer } from "./news";
import { SelectionContainer } from "./selection";
import { FC } from "react";
import Styles from "./about/About.module.scss";
import { IHomeData } from "features/news/News";

const HomeContainer: FC<IHomeData> = ({ home }) => {
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
      <Separator title={"О нас"} />
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
        <Separator title={"Новости"} />

        {home.newsItem && !home.newsItem.HasError ? (
          <NewsContainer {...home.newsItem} />
        ) : (
          "Приносим свои извинения. Произошел технический сбой. Наши специалисты уже работают над решением!"
        )}
        <Separator title={"Отрасли"} />
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
        <Separator
          title={"Выполнить подбор необходимого оборудования?"}
          classNameProps={Styles.bottom__separator}
        />
        <SelectionContainer />
      </Container>
    </>
  );
};
export { HomeContainer };
