import useHttp from "store/hooks/useHttp";

const useAuth = () => {
  const { request, loading, error } = useHttp();
  const getLogin = (login: string, password: string) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/Identity/login_v2",
      "POST",
      JSON.stringify({
        username: login,
        password: password,
      }),
    );
  };
  const postRegister = (values: any) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/Identity/register_user",
      "POST",
      JSON.stringify(values),
    );
  };
  return { getLogin, postRegister, loading, error };
};
export { useAuth };
