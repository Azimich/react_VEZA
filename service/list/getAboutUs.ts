import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useAboutUs = () => {
  const { request, loading, error } = useHttp();

  const getAboutUs = () => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/common/get_main_page_people",
      "GET",
      null,
      headers,
    );
  };

  return { getAboutUs, loading, error };
};

export { useAboutUs };
