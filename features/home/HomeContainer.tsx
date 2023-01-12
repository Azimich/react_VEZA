import { Container } from "components/common/container";
import { SliderContainer } from "components/slider";
import { sliderCategory, sliderIndustries } from "components/slider/mockData";
import { Separator } from "components/separator";
import { AboutContainer } from "./about/AboutContainer";
import { NewsContainer } from "./news";
import { SelectionContainer } from "./selection";
import { FC } from "react";
import Styles from "./about/About.module.scss";
import { ISSRHome } from "features/news/News";
import { ConnectError } from "components/connect_error";
import { ISlideItem } from "components/slider/Slider.d";

const HomeContainer: FC<ISSRHome> = ({
  newsData,
  indexBanner,
  indexCategories,
  indexAboutUS,
}) => {
  console.log("indexBanner", indexBanner, indexCategories);
  const convert = () => {
    return indexBanner?.response.map((e): ISlideItem => {
      return {
        alt: e.title,
        block_description: e.show_text || false,
        description: e.description,
        images: {
          pc: e.images.pc,
          ipad: e.images.ipad,
          mobile: e.images.mobile,
        },
        link_slider: false,
        title: e.title,
        typeSlider: "img",
        url: "",
      };
    });
  };

  return (
    <>
      <SliderContainer
        autoplay={true}
        items={convert()}
        theme={"home"}
        dots={true}
      />
      <Separator title={"О нас"} />
      {!indexAboutUS?.hasError ? (
        <AboutContainer {...indexAboutUS} />
      ) : (
        <ConnectError type={"text"} />
      )}
      <Container className={`wrapper_clear`} el="section">
        <div className={Styles.separator__title__container}>
          <Separator title={"Категория продукции"} />
        </div>
        <SliderContainer
          items={sliderCategory.items}
          dots={true}
          autoplay={true}
          spaceBetween={10}
          theme={"homecategory"}
        />
        <Separator title={"Новости"} />

        {newsData && !newsData.hasError ? (
          <NewsContainer {...newsData} />
        ) : (
          <ConnectError type={"text"} />
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
