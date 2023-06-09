import { GetStaticPaths, GetStaticProps } from "next";
import { wrapper } from "store/store";
import { Job, WhoWe } from "features/about";
import React from "react";
import { IComponents } from "components/tabs/Tabs";
import { mapListServer, menuListServer } from "service/index";
import { fetchMenu } from "store/slice/MenuSlice";
import { tabsAboutData } from "features/contacts/mockData";
import { fetchMap } from "components/map/MapSlice";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: tabsAboutData.map((e) => {
      return { params: { slug: e.url } };
    }) as [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));
    store.dispatch(fetchMap({ mapState: { ...(await mapListServer()) } }));
    const { params } = context;

    return {
      props: { slug: params.slug },
      revalidate: 10,
    };
  },
);

const ContactsSSR = (props: { slug: string }) => {
  const components: IComponents = {
    tab_kto_my: WhoWe,
    tab_vakansii: Job,
  };
  return React.createElement(components[`tab_${props.slug}`]);
};

export default ContactsSSR;
