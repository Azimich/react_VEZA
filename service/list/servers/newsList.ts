import { FetchService } from "../../Service";
import { headers } from "utils/bootstrap";

const newsList = async (pageNumber = 1, pageSize = 6, header = headers) => {
  return await FetchService.postData(
    process.env.NEXT_PUBLIC_APP_FETCH + "/api/News/get_news_page_common",
    {
      pageNumber: pageNumber,
      pageSize: pageSize,
    },
    header,
  );
};

export { newsList };
