import { GetStaticPaths, GetStaticProps } from "next";
import { wrapper } from "store/store";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service";
import { CertCatalog } from "features/resources/tab_certificates/certificates";

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
    console.log("23", params);

    return {
      props: { alias: params.alias },
      revalidate: 10,
    };
  }
);

const CertCatalogSSR = () => <CertCatalog />;

export default CertCatalogSSR;
