import { Container } from "components/common/container";
import Styles from "./News.module.scss";
import { INewsData } from "./News";
import { FC, useEffect, useState } from "react";
import { Pagination } from "components/pagination/Pagination";
import { useGetListNews } from "service/getListNews";
import { dataBreadNews } from "components/breadcrumbs/mockData";
import { BreadCrumbs } from "components/breadcrumbs";

const NewsContainer: FC<{ props: INewsData }> = ({ props }) => {
  console.log("props", props);
  /*  const [newsWithDesc] = useState<INewsData[]>(props.newsItem?.slice(0, 4));
  const [newsWithOutDesc] = useState<INewsData[]>(props.newsItem?.slice(4));*/

  const listNewsFunc = useGetListNews();
  useEffect(() => {
    const { listNewsData, loading, error } = listNewsFunc;
    listNewsData().then((e) => {
      console.log("FRONT API", e, loading, error);
    });
  }, []);

  return (
    <>
      <Container className={"wrapper_clear"}>
        <BreadCrumbs data={dataBreadNews} />

        {/* {newsWithDesc.map((e) => {
          return <NewsWithItem {...e} key={e.newsItem} />;
        })}
        <ul className={Styles.new_with_out_container}>
          {newsWithOutDesc.map((e) => {
            return <NewsWithOutItem {...e} key={e.id} />;
          })}
        </ul>*/}
        <Pagination currentPage={1} totalPageCount={5} pageSize={3} />
      </Container>
    </>
  );
};

export { NewsContainer };
