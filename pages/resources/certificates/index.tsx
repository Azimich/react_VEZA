import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import React from "react";
import { IComponents } from "components/tabs/Tabs";
import { tab_certificates } from "features/resources";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));
    return {
      props: { certificates: "certificates" },
      revalidate: 10,
    };
  },
);

const ContactsSSR = (props: { certificates: string }) => {
  const components: IComponents = {
    tab_certificates: tab_certificates,
  };
  return React.createElement(components[`tab_${props.certificates}`]);
};

export default ContactsSSR;
