import { Container } from "components/common/container";
import { INewsDataItem, ISSRHomeNews } from "./News";
import { FC, useEffect, useState } from "react";
import { Pagination } from "components/pagination/Pagination";
import { dataBreadNews } from "components/breadcrumbs/mockData";
import { BreadCrumbs } from "components/breadcrumbs";
import { NewsWithItem } from "features/news/NewsWithItem";
import { useRouter } from "next/router";
import { newsPath } from "utils/bootstrap";
import { useGetNews } from "service/getNews";
import { IPage } from "../../types/response";

const NewsContainer: FC<ISSRHomeNews> = ({ newsData }) => {
  const router = useRouter();
  const { getNewsData } = useGetNews();
  const [newsDataState, setNewsDataState] = useState<INewsDataItem[]>(
    newsData.response,
  );
  const [newsPageState, setNewsPageState] = useState<IPage>(newsData.page);

  useEffect(() => {
    getNewsData(Number(router.query.page) || 1, 6).then((data) => {
      setNewsPageState(data?.page);
      setNewsDataState(data?.response);
    });
  }, [router.query.page]);

  return (
    <>
      <Container className={"wrapper_clear"}>
        <BreadCrumbs data={dataBreadNews} />
        {newsDataState
          ? newsDataState.map((e) => {
              return <NewsWithItem {...e} key={e.newsId} />;
            })
          : "Приносим свои извинения. Произошел технический сбой. Наши специалисты уже работают над решением!"}
        {!newsData.hasError && (
          <Pagination
            onPageChange={(page) => {
              router.push(newsPath + "?page=" + page).then();
            }}
            currentPage={newsPageState?.pageNumber}
            totalPageCount={newsPageState?.totalPages}
            pageSize={newsPageState?.pageSize}
          />
        )}
      </Container>
    </>
  );
};

export { NewsContainer };
