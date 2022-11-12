import { FetchService } from "../../Service";

const newsList = async () => {
  return await FetchService.getData(
    process.env.NEXT_PUBLIC_APP_URL + "api/News/get_all_news",
    {
      "Access-Control-Allow-Origin": "*",
    }
  );
};

export { newsList };
