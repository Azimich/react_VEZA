import { Search } from "features/search";
import { GetStaticPaths, GetStaticProps } from "next";
import { wrapper } from "store/store";
import { ISearch } from "features/search/Search";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async (context) => {
    const { params } = context;
    console.log("param", params);
    return {
      props: { q: params.q },
      revalidate: 10,
    };
  }
);

const equipmentServer = (props: ISearch) => <Search {...props} />;

export default equipmentServer;
