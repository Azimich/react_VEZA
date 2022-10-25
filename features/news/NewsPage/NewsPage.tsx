import { Container } from "../../../components/common/container";
import { NeswPageItem } from "./NeswPageItem";
import { FC } from "react";
import { INewsData } from "../News";

const NewsPage: FC<INewsData> = (props) => {
  console.log("122324", props.newsData);

  return (
    <Container className={"wrapper"}>
      <NeswPageItem {...props?.newsData?.shift()} />
    </Container>
  );
};

export { NewsPage };
