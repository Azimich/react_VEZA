import { Container } from "components/common/container";
import { Box_icon_social_container } from "../../components/box_icon_social";
import { SliderContainer } from "../../components/slider";
import {
  sliderData,
  sliderCategory,
  sliderIndustries,
} from "../../components/slider/mockData";
import { newsData } from "./news/mockData";
import { Separator } from "../../components/separator";
import { AboutContainer } from "./about/AboutContainer";
import { NewsContainer } from "./news";
import { SelectionContainer } from "./selection";

const HomeContainer = () => {
  return (
    <>
      <Container className="wrapper" el="section">
        <div>
          <Box_icon_social_container />
        </div>
      </Container>
      <SliderContainer items={sliderData.items} theme={"home"} />

      <Separator title={"О нас"} />
      <AboutContainer />
      <Container className="wrapper" el="section">
        <Separator title={"Категория продукции"} />
        <SliderContainer
          items={sliderCategory.items}
          dots={true}
          autoplay={true}
          theme={"homecategory"}
        />
        <Separator title={"Новости"} />
        <NewsContainer props={newsData} />
        <Separator title={"Отрасли"} />
        <SliderContainer
          items={sliderIndustries.items}
          dots={true}
          autoplay={false}
          theme={"industries"}
          themeButton={"industries"}
          size={"medium"}
          effectSlide={"cards"}
          color={"link"}
        />
        <Separator
          title={"Выполнить подбор необходимого оборудования?"}
          fontSize={"35px"}
        />
        <SelectionContainer />
      </Container>
    </>
  );
};
export { HomeContainer };
