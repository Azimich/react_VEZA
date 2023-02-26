import { GetStaticPaths, GetStaticProps } from "next";
import { wrapper } from "store/store";
import React from "react";
import { IComponents } from "components/tabs/Tabs";
import { Interaction, SalesOffice, Support } from "../../features/contacts";
import { fetchMenu } from "store/slice/MenuSlice";
import { mapListServer, menuListServer } from "service/index";
import { fetchMap } from "components/map/MapSlice";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(fetchMap({ mapState: { ...(await mapListServer()) } }));
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));

    const { params } = context;
    return {
      props: { slug: params.slug },
      revalidate: 10,
    };
  },
);

const ContactsSlugSSR = (props: { slug: string }) => {
  const components: IComponents = {
    tab_ofis_Prodazh: SalesOffice,
    tab_obshchie_kontakty: Interaction,
    tab_tekhnicheskaya_podderzhka: Support,
  };
  return React.createElement(components[`tab_${props.slug}`]);
};

export default ContactsSlugSSR;
