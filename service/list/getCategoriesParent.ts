import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useCategoriesParent = () => {
  const { request, loading, error } = useHttp();

  const getCategoriesParent = () => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/news/get_news",
      "GET",
      null,
      headers,
    );
  };

  return { getCategoriesParent, loading, error };
};

export { useCategoriesParent };
