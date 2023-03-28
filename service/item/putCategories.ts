import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const usePutCategories = () => {
  const { request, loading, error } = useHttp();

  const putCategories = (data: { alias: string; type: number }) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/set_equipment_type",
      "PUT",
      JSON.stringify(data),
      headers,
    );
  };

  return { putCategories, loading, error };
};

export { usePutCategories };
