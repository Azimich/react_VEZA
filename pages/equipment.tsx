import { GetStaticProps } from "next";
import { wrapper } from "../store/store";
import { EquipmentContainer } from "../features/equipment";
import { CatalogData } from "../features/equipment/mockData";
import { ICatalogData } from "features/equipment/Equipment";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {
        data: CatalogData,
      },
      revalidate: 10,
    };
  }
);

const equipmentServer = (props: { data: ICatalogData[] }) => (
  <EquipmentContainer {...props} />
);

export default equipmentServer;
