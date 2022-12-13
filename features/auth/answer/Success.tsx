import React, { FC, useEffect } from "react";
import Styles from "./Answer.module.scss";
import { Button } from "components/button";
import { useRouter } from "next/router";
import { SuccessConfirmIcon } from "components/icons/includes/SuccessConfirmIcon";
import { useToken } from "store/hooks/useToken";

export interface IErrorResponse {
  errorMessage: string;
  hasError: boolean;
  response?: null | {
    accessToken?: string;
    refreshToken?: string;
    userName?: string;
  };
  customErrorCode?: number;
}

const Success: FC<IErrorResponse> = (props) => {
  const { setAuthToken } = useToken();
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/").then();
  };

  useEffect(() => {
    setAuthToken(props.response.accessToken, props.response.refreshToken);
  });

  return (
    <div className={Styles.block_error}>
      <SuccessConfirmIcon />
      <p className={Styles.title}>Успех!</p>
      <p>
        <Button
          theme={"news"}
          size={"large"}
          type={"button"}
          onClick={() => handleOnClick()}
        >
          На главную
        </Button>
      </p>
    </div>
  );
};

export { Success };
