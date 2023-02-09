import { FC } from "react";
import Styles from "./News.module.scss";
import { NewsItem } from "./NewsItem";
import { Container } from "components/common/container";
import { INewsDataItem, INewsResponseArray } from "features/news/News";

const NewsContainer: FC<INewsResponseArray> = ({ response }) => {
  return (
    <Container>
      <div className={`${Styles.news_container}`}>
        {response?.map((e: INewsDataItem) => {
          return <NewsItem props={e} key={e.newsId} />;
        })}
      </div>
    </Container>
  );
};

export { NewsContainer };
