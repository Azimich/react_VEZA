import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useGetBim = () => {
  const { request, loading, error } = useHttp();

  const getBimData = () => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/common/get_bim_plugins",
      "GET",
      null,
      headers,
    );
  };

  return { getBimData, loading, error };
};

export { useGetBim };
