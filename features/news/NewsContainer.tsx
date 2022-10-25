import { Container } from "../../components/common/container";
import { INewDataItem, INewsData } from "./News";
import { FC, useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";

const NewsContainer: FC<INewsData> = ({ newsData }) => {
  const [newsWithDesc, setNewsWithDesc] = useState<INewDataItem[]>(
    newsData.slice(0, 4)
  );

  useEffect(() => {
    setNewsWithDesc(newsWithDesc.slice(0, 4));
  }, []);

  return (
    <Container className={"wrapper"}>
      {newsWithDesc.map((e) => {
        return <NewsItem {...e} />;
      })}
    </Container>
  );
};

export { NewsContainer };
