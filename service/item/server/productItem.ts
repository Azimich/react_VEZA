import { FetchService } from "../../Service";

const productItem = async (alias = "") => {
  return await FetchService.getData(
    process.env.NEXT_PUBLIC_APP_FETCH +
      "/api/v1/equipment/get_equipment_page/" +
      alias,
  );
};

export { productItem };
