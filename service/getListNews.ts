import useHttp from "../store/hooks/useHttp";

const useGetListNews = () => {
  const { request, loading, error } = useHttp();

  const listNewsData = () => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/News/get_top_news?topNumber=2",
      "GET"
    );
  };

  return { listNewsData, loading, error };
};

export { useGetListNews };
