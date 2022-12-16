import { FetchService } from "../../Service";

const newsItem = async (alias = "") => {
  return await FetchService.getData(
    process.env.NEXT_PUBLIC_APP_FETCH +
      "/api/v1/news/get_news_by_alias?alias=" +
      alias,
  );
};

export { newsItem };
