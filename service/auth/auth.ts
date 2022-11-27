import useHttp from "store/hooks/useHttp";

const useAuth = () => {
  const { request, loading, error } = useHttp();

  const getLogin = (login: string, password: string) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/Identity/login",
      "POST",
      {
        userName: login,
        password: password,
      }
    );
  };

  return { getLogin, loading, error };
};

export { useAuth };
