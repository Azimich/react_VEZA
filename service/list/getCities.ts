import useHttp from "store/hooks/useHttp";

const useGetListCities = () => {
  const { request, loading, error } = useHttp();

  const getListCities = (isFilial = true) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/company/get_company_cities?onlyFilial=" +
        isFilial,
      "GET",
    );
  };

  return { getListCities, loading, error };
};

export { useGetListCities };
