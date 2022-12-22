import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useGetTopBanner = () => {
  const { request, loading, error } = useHttp();

  const listTopBanner = (pageNumber = 1, pageSize = 4) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/company/get_plants_offices",
      "POST",
      JSON.stringify({
        pageNumber: pageNumber,
        pageSize: pageSize,
      }),
      headers,
    );
  };

  return { listTopBanner, loading, error };
};

export { useGetTopBanner };
