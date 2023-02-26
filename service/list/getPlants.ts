import useHttp from "store/hooks/useHttp";

const useGetPlants = () => {
  const { request, loading, error } = useHttp();

  const getPlants = (pageNumber = 1, pageSize = 8) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/company/get_plants/" +
        pageNumber +
        "/" +
        pageSize,
      "GET",
    );
  };

  return { getPlants, loading, error };
};

export { useGetPlants };
