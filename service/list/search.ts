import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useSearch = () => {
  const { request, loading, error } = useHttp();

  const search = (q: string) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/search/find_news_or_equipment_by_name?name=" +
        q,
      "GET",
      null,
      headers,
    );
  };

  return { search, loading, error };
};

export { useSearch };
