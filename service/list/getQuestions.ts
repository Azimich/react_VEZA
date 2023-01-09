import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useQuestions = () => {
  const { request, loading, error } = useHttp();

  const getQuestions = () => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/common/get_query_answers",
      "GET",
      null,
      headers,
    );
  };

  return { getQuestions, loading, error };
};

export { useQuestions };
