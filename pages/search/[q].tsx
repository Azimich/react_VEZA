import { Search } from "features/search";
import { GetStaticPaths, GetStaticProps } from "next";
import { wrapper } from "store/store";
import { ISearch } from "features/search/Search";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));
    const { params } = context;

    return {
      props: { q: params.q },
      revalidate: 10,
    };
  },
);

const equipmentServer = (props: ISearch) => <Search {...props} />;

export default equipmentServer;
