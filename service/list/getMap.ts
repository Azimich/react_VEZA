import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useGetMap = () => {
  const { request, loading, error } = useHttp();

  const getMap = () => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/company/get_whole_district_map",
      "GET",
      null,
      headers,
    );
  };

  return { getMap, loading, error };
};

export { useGetMap };
