import { FetchService } from "../../Service";
const salesList = async () => {
  return await FetchService.getData(
    process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/decision/get_list",
  );
};

export { salesList };
