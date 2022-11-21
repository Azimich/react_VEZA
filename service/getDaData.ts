import useHttp from "../store/hooks/useHttp";

const useGetDaData = () => {
  const { request, loading, error } = useHttp();
  const token = process.env.NEXT_PUBLIC_DADATA_TOKEN;

  const daData = async (query: string) => {
    return await request(
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party",
      "POST",
      JSON.stringify({ query: query }),
      {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      }
    );
  };

  return { daData, loading, error };
};

export { useGetDaData };
