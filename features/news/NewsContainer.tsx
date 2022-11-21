import { Container } from "components/common/container";
import { INewDataItem, INewsData } from "./News";
import { FC, useEffect, useState } from "react";
import { Pagination } from "components/pagination/Pagination";
import { dataBreadNews } from "components/breadcrumbs/mockData";
import { BreadCrumbs } from "components/breadcrumbs";
import { NewsWithItem } from "features/news/NewsWithItem";
import Styles from "./News.module.scss";

const NewsContainer: FC<INewsData> = ({ news }) => {
  const [newsWithDesc, setNewsWithDesc] = useState<INewDataItem[]>();
  const [newsWithOutDesc, setNewsWithOutDesc] = useState<INewDataItem[]>();
  console.log("news", news);
  useEffect(() => {
    setNewsWithDesc(news.newsItem.Response.slice(0, 4));
    setNewsWithOutDesc(news.newsItem.Response.slice(4));
  }, []);

  return (
    <>
      <Container className={"wrapper_clear"}>
        <BreadCrumbs data={dataBreadNews} />

        {newsWithDesc &&
          newsWithDesc.map((e) => {
            return <NewsWithItem {...e} key={e.NewsId} />;
          })}
        <ul className={Styles.new_with_out_container}>
          {newsWithOutDesc &&
            newsWithOutDesc.map((e) => {
              return <NewsWithItem {...e} key={e.NewsId} />;
            })}
        </ul>
        <Pagination currentPage={1} totalPageCount={5} pageSize={3} />
      </Container>
    </>
  );
};

export { NewsContainer };
