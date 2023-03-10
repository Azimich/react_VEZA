import useHttp from "store/hooks/useHttp";

const useGetDescription = () => {
  const { request, loading, error } = useHttp();

  const getDescription = async (alias: string) => {
    const result = request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/get_equipment_advantages/" +
        alias,
      "GET",
    );

    return result;
  };

  return { getDescription, loading, error };
};

export { useGetDescription };
