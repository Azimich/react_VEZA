import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { GetStaticPaths } from "next";
import { EquipmentPage } from "../../../../features/equipment/EquipmentPage";
import { CatalogData } from "features/equipment/mockData";
import { equipmentPath } from "../../../../utils";
import { ICatalogData } from "features/equipment/Equipment";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async (context) => {
    const { params } = context;
    return {
      props: CatalogData.filter(
        (e) => e.alias === equipmentPath + params.slug + "/" + params.id
      ),
      revalidate: 10,
    };
  }
);

const equipment = (props: ICatalogData[]) => {
  return <EquipmentPage data={props} />;
};

export default equipment;
