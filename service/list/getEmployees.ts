import useHttp from "store/hooks/useHttp";

const useGetEmployees = () => {
  const { request, loading, error } = useHttp();

  const getEmployees = (pageNumber = 1, pageSize = 8) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/common/get_employees/" +
        pageNumber +
        "/" +
        pageSize,
      "GET",
    );
  };

  return { getEmployees, loading, error };
};

export { useGetEmployees };
