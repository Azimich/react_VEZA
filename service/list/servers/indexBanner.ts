import { FetchService } from "../../Service";

const IndexBanner = async () => {
  return await FetchService.getData(
    process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/common/get_main_page",
  );
};

export { IndexBanner };
