import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useGetManagers = () => {
  const { request, loading, error } = useHttp();

  const getManagers = (url = "") => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/company/get_company_managers/" +
        url,
      "GET",
      null,
      headers,
    );
  };

  return { getManagers, loading, error };
};

export { useGetManagers };
