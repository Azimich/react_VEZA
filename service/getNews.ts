import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useGetNews = () => {
  const { request, loading, error } = useHttp();

  const getNewsData = (pageNumber = 1, pageSize = 0) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/get_news",
      "POST",
      JSON.stringify({
        pageNumber: pageNumber,
        pageSize: pageSize,
      }),
      headers,
    );
  };

  return { getNewsData, loading, error };
};

export { useGetNews };
