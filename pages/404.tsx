import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { Page404Container } from "features/page404/page404Container";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: await menuListServer() }));
    return {
      props: {},
      revalidate: 10,
    };
  }
);

const NotFound = () => <Page404Container />;
export default NotFound;
