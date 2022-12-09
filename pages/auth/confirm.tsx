import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import React from "react";
import { Confirm } from "features/auth";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));
    return {
      props: {},
      revalidate: 10,
    };
  },
);

const ConfirmPage = (props: any) => <Confirm {...props} />;

export default ConfirmPage;
