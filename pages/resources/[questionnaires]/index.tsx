// import { useRouter } from "next/router";

// function RedirectPage() {
//   const router = useRouter();
//   // Make sure we're in the browser
//   if (typeof window !== "undefined") {
//     router.push("/resources/bim");
//     return;
//   }
// }

// RedirectPage.getInitialProps = (ctx: {
//   res: {
//     writeHead: (arg0: number, arg1: { Location: string }) => void;
//     end: () => void;
//   };
// }) => {
//   // We check for ctx.res to make sure we're on the server.
//   if (ctx.res) {
//     ctx.res.writeHead(302, { Location: "/resources/bim" });
//     ctx.res.end();
//   }
//   return { data: "" };
// };

// export default RedirectPage;
import { GetStaticPaths, GetStaticProps } from "next";
import { wrapper } from "store/store";
import React from "react";
import { IComponents } from "components/tabs/Tabs";
import {
  tab_Bim,
  tab_catalog,
  tab_certificates,
  tab_doc,
  tab_questionnaires,
  tab_questions,
  tab_training,
} from "features/resources";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service";

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
      props: { questionnaires: params.questionnaires },
      revalidate: 10,
    };
  },
);

const ContactsSSR = (props: { questionnaires: string }) => {
  const components: IComponents = {
    tab_bim: tab_Bim,
    tab_catalog: tab_catalog,
    tab_certificates: tab_certificates,
    tab_questions: tab_questions,
    tab_questionnaires: tab_questionnaires,
    tab_doc: tab_doc,
    tab_training: tab_training,
  };
  return React.createElement(components[`tab_${props.questionnaires}`]);
};

export default ContactsSSR;
