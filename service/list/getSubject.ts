import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useGetSubjected = () => {
  const { request, loading, error } = useHttp();

  const getSubjectData = () => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/common/get_subject_list",
      "GET",
      null,
      headers,
    );
  };

  return { getSubjectData, loading, error };
};

export { useGetSubjected };
