import useHttp from "store/hooks/useHttp";

const useGetListSales = () => {
  const { request, loading, error } = useHttp();

  const listSalesData = () => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/Company/get_office",
      "GET",
    );
  };

  return { listSalesData, loading, error };
};

export { useGetListSales };
