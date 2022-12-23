import useHttp from "store/hooks/useHttp";

const useGetJobCity = () => {
  const { request, loading, error } = useHttp();

  const getJobCity = (alias = "") => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/about/get_vacancies_by_city/" +
        alias,
      "GET",
    );
  };

  return { getJobCity, loading, error };
};

export { useGetJobCity };
