import React, { FC, useEffect } from "react";
import Styles from "./Answer.module.scss";
import { Button } from "components/button";
import { useRouter } from "next/router";
import { SuccessConfirmIcon } from "components/icons/includes/SuccessConfirmIcon";

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
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/").then();
  };
  useEffect(() => {
    localStorage.setItem("token", props.response.accessToken);
    localStorage.setItem("refreshToken", props.response.refreshToken);
  });
  console.log("111", props);
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
