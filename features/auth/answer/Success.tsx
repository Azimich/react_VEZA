import React, { FC } from "react";
import Styles from "./Answer.module.scss";
import { Button } from "components/button";
import { useRouter } from "next/router";
import { SuccessConfirmIcon } from "components/icons/includes/SuccessConfirmIcon";

export interface IErrorResponse {
  errorMessage: string;
  hasError: boolean;
  response?: null | {};
  customErrorCode?: number;
}

const Success: FC<IErrorResponse> = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/").then();
  };

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
