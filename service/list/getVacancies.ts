import useHttp from "store/hooks/useHttp";

const useGetVacancies = () => {
  const { request, loading, error } = useHttp();

  const getVacancies = () => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/about/get_vacancies",
      "GET",
    );
  };

  return { getVacancies, loading, error };
};

export { useGetVacancies };
