import useHttp from "store/hooks/useHttp";
import * as process from "process";
//import {useToken} from "store/hooks/useToken";

const useUserInfo = () => {
  const { request, loading, error } = useHttp();
  //    const {getToken} = useToken();

  const userInfo = (token: string) => {
    return request(
      `${process.env.NEXT_PUBLIC_APP_FETCH}/user/authorized`,
      "GET",
      null,
      {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    );
  };

  return { userInfo, loading, error };
};

export { useUserInfo };
