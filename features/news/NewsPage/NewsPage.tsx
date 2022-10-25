import { Container } from "../../../components/common/container";
import { NewsPageItem } from "./NeswPageItem";
import { FC } from "react";
import { INewsData } from "../News";

const NewsPage: FC<INewsData> = ({ newsData }) => {
  console.log("122324", newsData);

  return (
    <Container className={"wrapper"}>
      {newsData && <NewsPageItem {...newsData[0]} />}
    </Container>
  );
};

export { NewsPage };
