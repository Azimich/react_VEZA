import { FetchService } from "../../Service";

const newsList = async (pageNumber = 1, pageSize = 6) => {
  return await FetchService.postData(
    process.env.NEXT_PUBLIC_APP_FETCH + "/api/News/get_news_page_common",
    {
      pageNumber: pageNumber,
      pageSize: pageSize,
    },
  );
};

export { newsList };
