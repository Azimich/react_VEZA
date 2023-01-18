import useHttp from "store/hooks/useHttp";

const useGetListPlantsOffices = () => {
  const { request, loading, error } = useHttp();

  const getListPlantsOffices = () => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/company/get_plants_offices",
      "GET",
    );
  };

  return { getListPlantsOffices, loading, error };
};

export { useGetListPlantsOffices };
