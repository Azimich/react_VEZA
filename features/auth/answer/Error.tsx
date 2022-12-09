import React, { FC } from "react";
import { ErrorConfirmIcon } from "components/icons";
import Styles from "./Answer.module.scss";
import { Button } from "components/button";
import { useRouter } from "next/router";

export interface IErrorResponse {
  errorMessage: string;
  hasError: boolean;
  response?: null | {};
  customErrorCode: number;
}

const Error: FC<IErrorResponse> = ({ errorMessage }) => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/").then();
  };

  return (
    <div className={Styles.block_error}>
      <ErrorConfirmIcon />
      <p className={Styles.title}>Ошибка!!!</p>
      <p className={Styles.error}>{errorMessage}</p>
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

export { Error };
