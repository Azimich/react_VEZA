import useHttp from "store/hooks/useHttp";

const useGetDescription = () => {
  const { request, loading, error } = useHttp();

  const getDescription = async (alias: string) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/get_equipment_details/" +
        alias,
      "GET",
    );
  };

  return { getDescription, loading, error };
};

export { useGetDescription };
