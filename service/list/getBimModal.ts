import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useGetBimModal = () => {
  const { request, loading, error } = useHttp();

  const getBimModal = () => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/common/get_bim_model_block",
      "GET",
      null,
      headers,
    );
  };

  return { getBimModal, loading, error };
};

export { useGetBimModal };
