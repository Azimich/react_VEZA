import { FetchService } from "../../Service";

const menuCategory = async () => {
  return await FetchService.getData(
    process.env.NEXT_PUBLIC_APP_FETCH +
      "/api/v1/equipment/get_hierarchy_menu_object",
  );
};

export { menuCategory };
