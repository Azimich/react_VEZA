import { Container } from "components/common/container";
import { SliderContainer } from "components/slider";
import { Separator } from "components/separator";
import { AboutContainer } from "./about/AboutContainer";
import { NewsContainer } from "./news";
import { SelectionContainer } from "./selection";
import { FC } from "react";
import Styles from "./about/About.module.scss";
import {
  IBannerResponseArray,
  IIndustriesResponse,
  ISSRHome,
} from "features/news/News";
import { ConnectError } from "components/connect_error";
import { ISlideItem } from "components/slider/Slider.d";
import { ICategoriesResponseArray } from "features/equipment/Equipment";
import { IImages } from "../../types/response";

const HomeContainer: FC<ISSRHome> = ({
  newsData,
  indexBanner,
  indexCategories,
  indexAboutUS,
  indexIndustries,
}) => {
  const convert = (
    data: IBannerResponseArray | IIndustriesResponse,
    isShowText = false,
  ) => {
    return data?.response.map((e): ISlideItem => {
      return {
        alt: e.title,
        block_description: e.show_text !== undefined ? e.show_text : isShowText,
        description: e.description,
        shortDescription: e.shortDescription,
        images: {
          pc: e?.images?.pc,
          ipad: e?.images?.ipad,
          mobile: e?.images?.mobile,
        },
        link_slider: false,
        title: e.title,
        typeSlider: "img",
        url: e.alias,
      };
    });
  };

  const convertCat = (data: ICategoriesResponseArray, isShowText = false) => {
    return data?.response.map((e): ISlideItem => {
      return {
        alt: e.title,
        block_description: e.show_text !== undefined ? e.show_text : isShowText,
        description: e.description,
        images: {
          pc: (e?.images as IImages).pc,
          ipad: (e?.images as IImages).ipad,
          mobile: (e?.images as IImages).mobile,
        },
        link_slider: false,
        title: e.title,
        typeSlider: "img",
        url: e.alias,
      };
    });
  };

  return (
    <>
      <SliderContainer
        autoplay={false}
        items={convert(indexBanner)}
        theme={"home"}
        dots={true}
        isEdit={true}
      />
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
          items={convertCat(indexCategories)}
          dots={true}
          autoplay={false}
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
          items={convert(indexIndustries, true)}
          dots={true}
          autoplay={false}
          theme={"industries"}
          themeButton={"industries"}
          size={"medium"}
          pathDecision={true}
          navigations={true}
          spaceBetween={5}
          // effectSlide={"cards"}
          color={"link"}
        />
        <Separator
          title={"Выполнить подбор необходимого оборудования?"}
          classNameProps={`${Styles.bottom__separator}`}
        />
        <SelectionContainer />
      </Container>
    </>
  );
};

export { HomeContainer };
