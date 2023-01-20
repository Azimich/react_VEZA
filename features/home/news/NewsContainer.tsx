import { FC } from "react";
import Styles from "./News.module.scss";
import { NewsItem } from "./NewsItem";
import { Container } from "components/common/container";
import { INewsDataItem, INewsResponseArray } from "features/news/News";

const NewsContainer: FC<INewsResponseArray> = ({ response }) => {
  console.log("4444", response);
  return (
    <Container>
      <div className={`${Styles.news_container}`}>
        {response?.map((e: INewsDataItem, i: number) => {
          return (
            <NewsItem
              countColumn={i + 1}
              className={`col${i + 1}`}
              props={e}
              key={e.newsId}
            />
          );
        })}
      </div>
    </Container>
  );
};

export { NewsContainer };
