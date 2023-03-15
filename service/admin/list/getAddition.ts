import useHttp from "store/hooks/useHttp";

const useGetAddition = () => {
  const { request, loading, error } = useHttp();

  const getAddition = async (alias: string) => {
    const result = request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/get_additionals_for_equipment/" +
        alias,
      "GET",
    );
    return result;
  };

  return { getAddition, loading, error };
};

export { useGetAddition };
