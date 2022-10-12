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
    <Container className={"wrapper"}>
      <div className={`${Styles.news_container}  ${Styles.news}`}>
        {props.map((e, i) => {
          return <NewsItem className={`col${i + 1}`} props={e} />;
        })}
      </div>
    </Container>
  );
};

export { NewsContainer };
