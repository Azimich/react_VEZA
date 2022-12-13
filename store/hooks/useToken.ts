import { useCookies } from "react-cookie";
import { getCookie, deleteCookie } from "utils/manageCookie";

const useToken = () => {
  const timeAllowed = 86400 * 7;
  const timeAllowedM = 86400000 * 7;
  const [{ token = "" }, setToken, deleteToken] = useCookies<string>(["token"]);
  const [{ tokenRefresh = "" }, setTokenRefresh, deleteTokenRefresh] =
    useCookies<string>(["tokenRefresh"]);
  const [{ lastLoginTime = 0 }, setLastLoginTime, deleteLastLoginTime] =
    useCookies(["lastLoginTime"]);

  const setAuthToken = (
    token_data: string,
    token_refresh: string,
    remember = false,
  ) => {
    setToken(
      "token",
      token_data,
      remember ? { maxAge: timeAllowed, path: "/" } : { path: "/" },
    );
    setTokenRefresh(
      "tokenRefresh",
      token_refresh,
      remember ? { maxAge: timeAllowed, path: "/" } : { path: "/" },
    );
    setLastLoginTime(
      "lastLoginTime",
      (new Date(Date.now()).getTime() + timeAllowedM).toString(),
      remember ? { maxAge: timeAllowed, path: "/" } : { path: "/" },
    );
  };

  const getToken = () => {
    if (lastLoginTime === 0) {
      return {
        error: 2, //2 это нет токена
        tokens: {},
      };
    }

    const tokenArr: string[] = token.split(".");
    return Number(lastLoginTime) + Number(JSON.parse(atob(tokenArr[1])).exp) >
      new Date(Date.now()).getTime()
      ? {
          error: 0,
          tokens: {
            token: token,
            tokenRefresh: tokenRefresh,
            lastLoginTime: lastLoginTime,
          },
        }
      : {
          error: 1,
          tokens: {
            token: token,
            tokenRefresh: tokenRefresh,
            lastLoginTime: 0,
          },
        };
  };

  const deleteAuthToken = () => {
    deleteToken("token");
    deleteTokenRefresh("tokenRefresh");
    deleteLastLoginTime("lastLoginTime");

    //if react cookies didn't remove token do it natively;
    if (getCookie("token") || getCookie("tokenRefresh")) {
      deleteCookie("token");
      deleteCookie("tokenRefresh");
    }
  };

  return { setAuthToken, getToken, deleteAuthToken };
};

export { useToken };
