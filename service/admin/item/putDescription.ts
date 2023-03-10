import useHttp from "store/hooks/useHttp";

const useDescription = () => {
  const { request, loading, error } = useHttp();

  const putDescription = async (alias: string) => {
    const req = {
      alias: alias,
    };
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/put_equipment_advantages1",
      "PUT",
      JSON.stringify(req),
    );
  };

  return { putDescription, loading, error };
};

export { useDescription };
