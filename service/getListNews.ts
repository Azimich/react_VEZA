import useHttp from "../store/hooks/useHttp";

const useGetListNews = () => {
  const { request, loading, error } = useHttp();

  const listNewsData = () => {
    return request(
      process.env.NEXT_PUBLIC_APP_URL + "api/News/get_all_news",
      "GET"
    );
  };

  return { listNewsData, loading, error };
};

export { useGetListNews };
