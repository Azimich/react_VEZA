import { GetStaticPaths, GetStaticProps } from "next";
import { wrapper } from "../../store/store";
import { About, WhoWe } from "../../features/about";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "/whowe" } },
      { params: { slug: "/references" } },
      { params: { slug: "/job" } },
      { params: { slug: "/factory" } },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async (context) => {
    const { params } = context;

    return {
      props: {},
      revalidate: 10,
    };
  }
);

const ContactsSSR = (props: any) => {
  return <WhoWe {...props} />;
};

export default ContactsSSR;
