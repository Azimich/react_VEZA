import { Container } from "components/common/container";
import { FC } from "react";
import { BreadCrumbs } from "components/breadcrumbs";
import { dataBreadNews } from "components/breadcrumbs/mockData";

const NewsPage: FC = (/*{ newsData }*/) => {
  return (
    <Container className={"wrapper_clear no_padding"}>
      <BreadCrumbs data={dataBreadNews} />
      {/*{newsData && <NewsPageItem {...newsData[0]} />}*/}
    </Container>
  );
};

export { NewsPage };
