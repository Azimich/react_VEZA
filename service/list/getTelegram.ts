import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useGetTelegram = () => {
  const { request, loading, error } = useHttp();

  const getTelegramData = () => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/Contacts/api/v1/contact/contact_telegrams_list",
      "GET",
      null,
      headers,
    );
  };

  return { getTelegramData, loading, error };
};

export { useGetTelegram };
