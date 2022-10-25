import { Container } from "../../components/common/container";
import { INewDataItem, INewsData } from "./News";
import { FC, useState } from "react";
import { NewsWithItem } from "./NewsWithItem";
import Styles from "./News.module.scss";
import { NewsWithOutItem } from "./NewsWithOutItem";

const NewsContainer: FC<INewsData> = ({ newsData }) => {
  const [newsWithDesc] = useState<INewDataItem[]>(newsData.slice(0, 4));
  const [newsWithOutDesc] = useState<INewDataItem[]>(newsData.slice(4));

  return (
    <Container className={"wrapper"}>
      {newsWithDesc.map((e) => {
        return <NewsWithItem {...e} key={e.id} />;
      })}
      <div className={Styles.new_with_out_container}>
        {newsWithOutDesc.map((e) => {
          return <NewsWithOutItem {...e} key={e.id} />;
        })}
      </div>
    </Container>
  );
};

export { NewsContainer };
