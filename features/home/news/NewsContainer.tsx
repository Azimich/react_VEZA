import { FC } from "react";
import Styles from "./News.module.scss";
import { NewsItem } from "./NewsItem";
import { Container } from "components/common/container";
import { IResponse } from "../../../types/response";
import { INewsDataItem } from "features/news/News";

const NewsContainer: FC<IResponse> = (props) => {
  const { response: response } = props;

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
