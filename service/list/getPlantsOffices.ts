import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useGetListPlantsOffices = () => {
  const { request, loading, error } = useHttp();

  const getListPlantsOffices = () => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/company/get_plants_offices/0/0",
      "GET",
      null,
      headers,
    );
  };

  return { getListPlantsOffices, loading, error };
};

export { useGetListPlantsOffices };
