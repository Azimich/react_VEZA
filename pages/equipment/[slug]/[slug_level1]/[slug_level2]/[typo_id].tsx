import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { GetStaticPaths } from "next";
import { TypoSize } from "features/typo_size";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));
    return {
      props: {},
      revalidate: 10,
    };
  },
);

const typoServer = () => {
  return <TypoSize />;
};
export default typoServer;
