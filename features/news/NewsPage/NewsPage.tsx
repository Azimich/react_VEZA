import { Container } from "components/common/container";
import { FC } from "react";
import { BreadCrumbs } from "components/breadcrumbs";
import { dataBreadNews } from "components/breadcrumbs/mockData";
import { NewsPageItem } from "features/news";
import { ISSRNews } from "features/news/News";

const NewsPage: FC<ISSRNews> = ({ newsData }) => {
  return (
    <Container className={"wrapper_clear no_padding"}>
      <BreadCrumbs data={dataBreadNews} />
      {newsData && <NewsPageItem {...newsData.response} />}
    </Container>
  );
};

export { NewsPage };
