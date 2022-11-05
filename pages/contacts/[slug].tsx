import { GetStaticPaths, GetStaticProps } from "next";
import { wrapper } from "../../store/store";
import React from "react";
import { IComponents } from "../../components/tabs/Tabs";
import { Interaction, SalesOffice, Support } from "../../features/contacts";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async (context) => {
    const { params } = context;
    return {
      props: { slug: params.slug },
      revalidate: 10,
    };
  }
);

const ContactsSlugSSR = (props: { slug: string }) => {
  const components: IComponents = {
    tab_sale_office: SalesOffice,
    tab_interaction: Interaction,
    tab_support: Support,
  };
  return React.createElement(components[`tab_${props.slug}`]);
};

export default ContactsSlugSSR;
