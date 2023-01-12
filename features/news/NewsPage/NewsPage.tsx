import { Container } from "components/common/container";
import { FC, useEffect, useState } from "react";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadNews } from "components/breadcrumbs/mockData";
import { NewsPageItem } from "features/news";
import { ISSRNews } from "features/news/News";

const NewsPage: FC<ISSRNews> = ({ newsData }) => {
  const [breadCrumbs, setBreadCrumbs] = useState<IBreadCrumbs[]>(dataBreadNews);
  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: newsData.response.newsName }]);
  }, [dataBreadNews]);

  return (
    <Container className={"wrapper_clear no_padding"}>
      <BreadCrumbs data={breadCrumbs} />
      {newsData && <NewsPageItem {...newsData.response} />}
    </Container>
  );
};

export { NewsPage };
