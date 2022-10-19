import { GetStaticProps } from "next";
import { wrapper } from "../store/store";
import { EquipmentContainer } from "../features/equipment";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {},
      revalidate: 10,
    };
  }
);

const equipmentServer = (props: any) => <EquipmentContainer {...props} />;

export default equipmentServer;
