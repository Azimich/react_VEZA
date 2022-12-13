import useHttp from "store/hooks/useHttp";
import { baseUrlApi } from "service/bootstrap";
//import {useToken} from "store/hooks/useToken";

const useUserInfo = () => {
  const { request, loading, error } = useHttp();
  //    const {getToken} = useToken();

  const userInfo = (token: string) => {
    return request(`${baseUrlApi}user/authorized`, "GET", null, {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    });
  };

  return { userInfo, loading, error };
};

export { useUserInfo };
