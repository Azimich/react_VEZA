import useHttp from "store/hooks/useHttp";
import { headers_files } from "utils/bootstrap";

const useAddTopBanner = () => {
  const { request, loading, error } = useHttp();

  const getAddTopBanner = (fd: FormData) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/common/put_main_page",
      "PUT",
      fd,
      headers_files,
    );
  };

  return { getAddTopBanner, loading, error };
};

export { useAddTopBanner };
