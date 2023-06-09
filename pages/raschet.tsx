import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { CalculationsContainer } from "features/typo_size/calculations/CalculationsContainer";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: await menuListServer() }));
    return {
      props: {},
      revalidate: 10,
    };
  },
);

const InDevelopment = () => <CalculationsContainer />;
export default InDevelopment;
