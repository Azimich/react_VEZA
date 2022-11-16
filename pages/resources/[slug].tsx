import { GetStaticPaths, GetStaticProps } from "next";
import { wrapper } from "../../store/store";
import React from "react";
import { IComponents } from "../../components/tabs/Tabs";
import {
  tab_Bim,
  tab_catalog,
  tab_certificates,
  tab_doc,
  tab_questions,
  tab_training,
} from "../../features/resources";
import { fetchMenu } from "../../store/slice/MenuSlice";
import { menuListServer } from "../../service";

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
      props: { slug: params.slug },
      revalidate: 10,
    };
  }
);

const ContactsSSR = (props: { slug: string }) => {
  const components: IComponents = {
    tab_bim: tab_Bim,
    tab_catalog: tab_catalog,
    tab_certificates: tab_certificates,
    tab_questions: tab_questions,
    tab_doc: tab_doc,
    tab_training: tab_training,
  };
  return React.createElement(components[`tab_${props.slug}`]);
};

export default ContactsSSR;
