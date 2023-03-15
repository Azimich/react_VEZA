import useHttp from "store/hooks/useHttp";
import { INewsDataItem } from "features/news/News";

const useAddNews = () => {
  const { request, loading, error } = useHttp();

  const postNews = async (body: INewsDataItem[], alias: string) => {
    const req = {
      alias: alias,
      advantages: body,
    };
    const result = request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/common/add_asked_question",
      "POST",
      JSON.stringify(req),
    );

    return result;
  };

  return { postNews, loading, error };
};

export { useAddNews };
