import useHttp from "store/hooks/useHttp";
import { ISubjectItem } from "features/contacts/tab_support/Support";
import { headers } from "utils/bootstrap";

const usePostSubject = () => {
  const { request, loading, error } = useHttp();

  const postSubject = (data: ISubjectItem) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/common/add_subject_email",
      "POST",
      JSON.stringify(data),
      headers,
    );
  };

  return { postSubject, loading, error };
};

export { usePostSubject };
