import useHttp from "store/hooks/useHttp";
import { headers } from "utils/bootstrap";

const useAuth = () => {
  const { request, loading, error } = useHttp();
  const getLogin = (login: string, password: string) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/Identity/login",
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

  const Confirm = (token: string, login: string) => {
    console.log("token", token, login);
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/Identity/registration_confirm",
      "POST",
      JSON.stringify({
        login: login,
        token: token,
      }),
      headers,
    );
  };
  const getForgot = (email: string) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/Identity/restore_password",
      "POST",
      JSON.stringify({
        login: email,
      }),
      headers,
    );
  };
  const checkAuth = (token: string) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/Identity/check_user_with_access_token",
      "POST",
      null,
      {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    );
  };
  return {
    Confirm,
    checkAuth,
    getLogin,
    getForgot,
    postRegister,
    loading,
    error,
  };
};
export { useAuth };
