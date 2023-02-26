import useHttp from "store/hooks/useHttp";

const useGetOffices = () => {
  const { request, loading, error } = useHttp();

  const getOffices = (pageNumber = 1, pageSize = 8) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/company/get_offices/" +
        pageNumber +
        "/" +
        pageSize,
      "GET",
    );
  };

  return { getOffices, loading, error };
};

export { useGetOffices };
