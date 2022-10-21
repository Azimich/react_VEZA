import { GetStaticProps } from "next";
import { wrapper } from "../../../../store/store";
import { GetStaticPaths } from "next";
import { TypoSize } from "../../../../features/typo_size";
import { CatalogData } from "features/equipment/mockData";
import { ICatalogData } from "features/equipment/Equipment";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async (context) => {
    const { params } = context;
    const productData = CatalogData.filter(
      (e: ICatalogData) =>
        e.alias === "/equipment/" + params.slug + "/" + params.id &&
        e.typo_size_id === Number(params.typo_id)
    );
    console.log("productData", productData);
    return {
      props: {
        data: productData,
      },
      revalidate: 10,
    };
  }
);

const typoServer = (props: ICatalogData[]) => <TypoSize data={props} />;

export default typoServer;
