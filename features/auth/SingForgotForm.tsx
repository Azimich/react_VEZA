import React, { FC, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Styles from "features/auth/SignContainer.module.scss";
import { Input } from "components/input";
import { Button } from "components/button";
import { SpinnerButton } from "components/spinners";
import { Message } from "components/massage";
import { useAuth } from "service/auth/auth";

interface IForgotResponse {
  customErrorCode: number;
  errorMessage: string;
  hasError: boolean;
  response: null;
  systemErrorMessage: string;
}

const SingForgotForm: FC = () => {
  const [dataResponse, setDataResponse] = useState<IForgotResponse>();
  const { getForgot, loading } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      forgot: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .min(3, "Минимум 3 символа!")
        .max(50, "Максимум 50 символов!")
        .required("Обязательно для заполнения!")
        .email("Неверный email!"),
    }),
    onSubmit: (values) => {
      getForgot(values.email).then((data) => {
        setDataResponse(data);
      });
    },
  });

  return (
    <div className={Styles.forgot__form}>
      <form
        className={Styles.forgot__form__item}
        onSubmit={formik.handleSubmit}
      >
        <h1>Восстановить пароль</h1>
        <div
          className={`${
            formik.errors?.email && formik.touched.email
              ? Styles.forgot__form__item__input_error
              : Styles.forgot__form__item__input
          }`}
        >
          <Input
            name={"email"}
            id={"email_id"}
            onBlur={formik.handleBlur}
            title={"Введите почту *"}
            className={Styles.input__item}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <div
            className={`${
              formik.errors?.email && formik.touched.email
                ? Styles.overflow__auto
                : Styles.overflow
            }`}
          >
            <span>{formik.errors.email}</span>
          </div>
        </div>
        <div className={Styles.authorization__form__item__answer}>
          <Button type={"submit"} theme={"industries"}>
            <li>Восстановить</li>
            {loading && (
              <div className={Styles.button__spinner}>{<SpinnerButton />}</div>
            )}
          </Button>
          {dataResponse?.hasError && (
            <Message type={"error"}>
              <span>{dataResponse.errorMessage}</span>
            </Message>
          )}
        </div>
      </form>
    </div>
  );
};

export { SingForgotForm };
