import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { Error } from "features/auth";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));

    return {
      props: {},
      revalidate: 10,
    };
  },
);

const ConfirmPage = (props: any) => <Error {...props} />;

export default ConfirmPage;
