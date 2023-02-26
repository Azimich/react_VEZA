import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import React from "react";
import { IComponents } from "components/tabs/Tabs";
import { tab_questionnaires } from "features/resources";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));
    return {
      props: { questionnaires: "questionnaires" },
      revalidate: 10,
    };
  },
);

const ContactsSSR = (props: { questionnaires: string }) => {
  const components: IComponents = {
    tab_questionnaires: tab_questionnaires,
  };
  return React.createElement(components[`tab_${props.questionnaires}`]);
};

export default ContactsSSR;
