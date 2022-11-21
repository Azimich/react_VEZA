import useHttp from "../store/hooks/useHttp";

const useGetDaData = () => {
  const { request, loading, error } = useHttp();
  const token = "492003ab7600971803436475e9254289aae46188";
  const query = "7707083893";

  const daData = async () => {
    return await request(
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party",
      "POST",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token " + token,
        },
        body: JSON.stringify({ query: query }),
      }
    );
  };

  return { daData, loading, error };
};

export { useGetDaData };
