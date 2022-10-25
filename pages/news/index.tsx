import { GetStaticProps } from "next";
import { wrapper } from "../../store/store";

import { NewsContainer } from "features/news";
import { NewsData } from "../../features/news/mockData";
import { INewsData } from "features/news/News";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    const newsData = NewsData.slice(0, 7);

    return {
      props: {
        newsData,
      },
      revalidate: 10,
    };
  }
);

const newsSSR = (props: INewsData[]) => <NewsContainer {...props} />;

export default newsSSR;
