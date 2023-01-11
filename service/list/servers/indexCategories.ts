import { FetchService } from "../../Service";

const indexCategories = async () => {
  return await FetchService.getData(
    process.env.NEXT_PUBLIC_APP_FETCH +
      "/api/v1/equipment/get_main_page_equipment_categories",
  );
};

export { indexCategories };
