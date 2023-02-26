import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useGetSertificates = () => {
  const { request, loading, error } = useHttp();

  const getSertificates = () => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/produktsiya/get_certificate_categories",
      "GET",
      null,
      headers,
    );
  };

  return { getSertificates, loading, error };
};

export { useGetSertificates };
