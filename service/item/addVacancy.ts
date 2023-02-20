import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useAddVacancy = () => {
  const { request, loading, error } = useHttp();

  const addVacancy = (data: { name: string; email: string; phone: string }) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/common/add_vacancy",
      "POST",
      JSON.stringify(data),
      headers,
    );
  };

  return { addVacancy, loading, error };
};

export { useAddVacancy };
