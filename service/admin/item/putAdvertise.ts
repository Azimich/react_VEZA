import useHttp from "store/hooks/useHttp";
import { IListItem } from "features/equipment/equipmentPage/utp/ModalFormAdversiseEdit";

const useAdvertise = () => {
  const { request, loading, error } = useHttp();

  const putAdvertise = async (body: IListItem[], alias: string) => {
    const req = {
      alias: alias,
      advantages: body,
    };
    const result = request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/put_equipment_advantages",
      "PUT",
      JSON.stringify(req),
    );

    return result;
  };

  return { putAdvertise, loading, error };
};

export { useAdvertise };
