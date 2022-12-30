import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useGetMap = () => {
  const { request, loading, error } = useHttp();

  const getMap = (pageNumber = 1, pageSize = 0) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/news/get_news",
      "POST",
      JSON.stringify({
        pageNumber: pageNumber,
        pageSize: pageSize,
      }),
      headers,
    );
  };

  return { getMap, loading, error };
};

export { useGetMap };
