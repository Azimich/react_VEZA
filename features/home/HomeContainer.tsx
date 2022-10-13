import { Container } from "components/common/container";
import { Box_icon_social_container } from "../../components/box_icon_social";
import { SliderContainer } from "../../components/slider";
import {
  sliderData,
  sliderCategory,
  sliderIndustries,
} from "../../components/slider/mockData";
import { newsData } from "./news/mockData";
import { SeparatorContainer } from "../../components/separator";
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

      <SeparatorContainer title={"О нас"} />
      <AboutContainer />
      <Container className="wrapper" el="section">
        <SeparatorContainer title={"Категория продукции"} />
        <SliderContainer
          items={sliderCategory.items}
          dots={true}
          autoplay={true}
          theme={"homecategory"}
        />
        <SeparatorContainer title={"Новости"} />
        <NewsContainer props={newsData} />
        <SeparatorContainer title={"Отрасли"} />
        <SliderContainer
          items={sliderIndustries.items}
          dots={true}
          autoplay={true}
          theme={"industries"}
        />
        <SeparatorContainer
          title={"Выполнить подбор необходимого оборудования?"}
          fontSize={"35px"}
        />
        <SelectionContainer />
      </Container>
    </>
  );
};
export { HomeContainer };
