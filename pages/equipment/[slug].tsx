import { GetStaticProps } from "next";
import { wrapper } from "../../store/store";
import { CatalogEquipmentData } from "../../features/equipment/mockData";
import { EquipmentContainer } from "features/equipment";
import { GetStaticPaths } from "next";
import { eachRecursive } from "../../utils";

export const getStaticPaths: GetStaticPaths = async () => {
  const slug = eachRecursive(CatalogEquipmentData);
  return {
    paths: slug,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {},
      revalidate: 10,
    };
  }
);

const equipment = (props: any) => <EquipmentContainer {...props} />;

export default equipment;
