import useHttp from "store/hooks/useHttp";
import { IAddition } from "components/TreeSelect/TreeContainer";

const usePutAdditional = () => {
  const { request, loading, error } = useHttp();

  const putAdditional = async (body: IAddition[], alias: string) => {
    const req = {
      alias: alias,
      additionals: body.map((e) => e.id),
    };

    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/put_additionals_for_equipment",
      "PUT",
      JSON.stringify(req),
    );
  };

  return { putAdditional, loading, error };
};

export { usePutAdditional };
