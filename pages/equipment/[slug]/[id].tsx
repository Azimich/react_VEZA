import { GetStaticProps } from "next";
import { wrapper } from "../../../store/store";
import { GetStaticPaths } from "next";
import { EquipmentPage } from "../../../features/equipment/EquipmentPage";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
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

const equipment = (props: any) => <EquipmentPage {...props} />;

export default equipment;
