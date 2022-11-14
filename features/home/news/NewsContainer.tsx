import { FC } from "react";
import { INewsProps } from "./News";
import Styles from "./News.module.scss";
import { NewsItem } from "./NewsItem";
import { Container } from "../../../components/common/container";

interface INewsData {
  props: INewsProps[];
}

const NewsContainer: FC<INewsData> = ({ props }) => {
  return (
    <Container className={"wrapper_clear no_padding"}>
      <div className={`${Styles.news_container}`}>
        {props.map((e, i) => {
          return <NewsItem className={`col${i + 1}`} props={e} key={e.id} />;
        })}
      </div>
    </Container>
  );
};

export { NewsContainer };
