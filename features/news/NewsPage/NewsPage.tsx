import { Container } from "components/common/container";
import { NewsPageItem } from "features/news";
import { FC } from "react";
import { INewsData } from "../News";
import { BreadCrumbs } from "components/breadcrumbs";
import { dataBreadNews } from "components/breadcrumbs/mockData";

const NewsPage: FC<INewsData> = ({ newsData }) => {
  return (
    <Container className={"wrapper_clear no_padding"}>
      <BreadCrumbs data={dataBreadNews} />
      {newsData && <NewsPageItem {...newsData[0]} />}
    </Container>
  );
};

export { NewsPage };
