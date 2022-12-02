import { FC } from "react";
import Styles from "./News.module.scss";
import { NewsItem } from "./NewsItem";
import { Container } from "components/common/container";
import { IHomeResponse, INewDataItem } from "features/news/News";

const NewsContainer: FC<IHomeResponse> = (props) => {
  const { Response: response } = props;

  return (
    <Container>
      <div className={`${Styles.news_container}`}>
        {response?.map((e: INewDataItem, i: number) => {
          return (
            <NewsItem
              countColumn={i + 1}
              className={`col${i + 1}`}
              props={e}
              key={e.NewsId}
            />
          );
        })}
      </div>
    </Container>
  );
};

export { NewsContainer };
