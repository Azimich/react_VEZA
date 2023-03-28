import useHttp from "store/hooks/useHttp";

const useGetCategories = () => {
  const { request, loading, error } = useHttp();

  const getCategories = async (alias: string) => {
    const result = request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/get_equipment_classification_hierarchy/" +
        alias,
      "GET",
    );

    return result;
  };

  return { getCategories, loading, error };
};

export { useGetCategories };
