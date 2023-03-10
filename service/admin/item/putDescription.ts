import useHttp from "store/hooks/useHttp";

const usePutDescription = () => {
  const { request, loading, error } = useHttp();

  const putDescription = async (alias: string, description: string) => {
    const req = {
      alias: alias,
      description: description,
    };
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/put_equipment_description",
      "PUT",
      JSON.stringify(req),
    );
  };

  return { putDescription, loading, error };
};

export { usePutDescription };
