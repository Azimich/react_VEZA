import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useGetFiles = () => {
  const { request, loading, error } = useHttp();

  const getFiles = (value: string[]) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/storage/get_files",
      "POST",
      JSON.stringify(value),
      headers,
    );
  };

  return { getFiles, loading, error };
};

export { useGetFiles };
