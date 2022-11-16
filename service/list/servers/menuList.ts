import { FetchService } from "../../Service";

const menuList = async () => {
  return await FetchService.getData(
    process.env.NEXT_PUBLIC_APP_FETCH + "/api/Common/get_menu"
  );
};

export { menuList };
