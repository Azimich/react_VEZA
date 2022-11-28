import { FetchService } from "../../Service";

const newsListHome = async () => {
  return await FetchService.postData(
    process.env.NEXT_PUBLIC_APP_FETCH + "/api/News/get_news_page",
    {
      pageNumber: 1,
      pageSize: 4,
    },
  );
};

const newsList = async () => {
  return await FetchService.postData(
    process.env.NEXT_PUBLIC_APP_FETCH + "/api/News/get_news_page",
    {
      pageNumber: 1,
      pageSize: 7,
    },
  );
};

export { newsListHome, newsList };
