import { GetStaticProps } from "next";
import { wrapper } from "../../store/store";

import { NewsPage } from "features/news";
import { GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {
        data: "",
      },
      revalidate: 10,
    };
  }
);

const newsSSR = (props: any) => <NewsPage {...props} />;

export default newsSSR;
