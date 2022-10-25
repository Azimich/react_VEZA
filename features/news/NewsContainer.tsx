import { Container } from "../../components/common/container";
import { INewsData } from "./News";
import { FC, useEffect, useState } from "react";

const NewsContainer: FC<INewsData[]> = (props) => {
  const [newsWithDesc, setNewsWithDesc] = useState<INewsData[]>(props);

  useEffect(() => {
    console.log("data", newsWithDesc);
  }, []);

  return <Container className={"wrapper"}>111</Container>;
};

export { NewsContainer };
