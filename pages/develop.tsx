import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { DevelopContainer } from "features/typo_size/develop/DevelopContainer";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: await menuListServer() }));
    return {
      props: {},
      revalidate: 10,
    };
  },
);

const InDevelopment = () => <DevelopContainer />;
export default InDevelopment;
