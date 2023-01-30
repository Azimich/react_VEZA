import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useResponsibleCityAlias = () => {
  const { request, loading, error } = useHttp();

  const getResponsibleCityAlias = (url: string) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/company/get_responsible_city_alias/" +
        url,
      "GET",
      null,
      headers,
    );
  };

  return { getResponsibleCityAlias, loading, error };
};

export { useResponsibleCityAlias };
