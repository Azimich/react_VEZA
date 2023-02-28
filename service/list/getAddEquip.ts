import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useGetAddEquip = () => {
  const { request, loading, error } = useHttp();

  const getAddEquip = (alias: string) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/equipment/get_additional_equipment_by_alias/" +
        alias,
      "GET",
      null,
      headers,
    );
  };

  return { getAddEquip, loading, error };
};

export { useGetAddEquip };
