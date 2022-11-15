import { Container } from "components/common/container";
import { NewsPageItem } from "./NewsPageFirst";
import { FC } from "react";
import { INewsData } from "../News";
import { BreadCrumbs } from "components/breadcrumbs";
import { dataBreadNews } from "components/breadcrumbs/mockData";
import { newsPath } from "utils/bootstrap";

const NewsPage: FC<INewsData> = ({ newsData }) => {
  dataBreadNews.push({
    title: "kaluga",
    url: process.env.NEXT_PUBLIC_APP_URL + newsPath + "kaluga1",
  });

  console.log("dataBreadNews", dataBreadNews);
  return (
    <Container className={"wrapper_clear no_padding"}>
      <BreadCrumbs data={dataBreadNews} />
      {newsData && <NewsPageItem {...newsData[0]} />}
    </Container>
  );
};

export { NewsPage };
