import { Container } from "components/common/container";
import { INewsData } from "./News";
import { FC } from "react";
import { Pagination } from "components/pagination/Pagination";
import { dataBreadNews } from "components/breadcrumbs/mockData";
import { BreadCrumbs } from "components/breadcrumbs";
import { NewsWithItem } from "features/news/NewsWithItem";

const NewsContainer: FC<INewsData> = ({ news }) => {
  return (
    <>
      <Container className={"wrapper_clear"}>
        <BreadCrumbs data={dataBreadNews} />
        {news.newsItem.Response &&
          news.newsItem.Response.map((e) => {
            return <NewsWithItem {...e} key={e.NewsId} />;
          })}
        <Pagination
          onPageChange={() => {
            news.newsItem.Page.PageNumber;
          }}
          currentPage={news.newsItem.Page.PageNumber}
          totalPageCount={news.newsItem.Page.TotalPages}
          pageSize={news.newsItem.Page.PageSize}
        />
      </Container>
    </>
  );
};

export { NewsContainer };
