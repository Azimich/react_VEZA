import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useGetCatalog = () => {
  const { request, loading, error } = useHttp();

  const getCatalog = () => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/resources/catalogues",
      "GET",
      null,
      headers,
    );
  };

  return { getCatalog, loading, error };
};

export { useGetCatalog };
