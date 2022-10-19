// import React, { FC } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Styles from "../../features/auth/SignContainer.module.scss";
import { Input } from "../../components/input/Index";
import { CheckboxWithLabel } from "components/checkbox";
import { Button } from "components/button";
import Link from "next/link";

const SingInForm = () => {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      forgot: false,
    },
    validationSchema: Yup.object({
      login: Yup.string()
        .min(3, "Минимум 3 символа!")
        .max(15, "Must be 15 characters or less")
        .required("Обязательно для заполнения!"),
      password: Yup.string()
        .min(6, "Минимум 6 символов!")
        .max(20, "Must be 20 characters or less")
        .required("Обязательно для заполнения!"),
    }),
    onSubmit: (values: any) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  console.log("formik.touched", formik.touched, formik.errors);
  return (
    <div className={Styles.authorization__form}>
      <form
        onSubmit={formik.handleSubmit}
        className={Styles.authorization__form__item}
      >
        <div
          className={`${
            formik.errors?.login && formik.touched?.login
              ? Styles.authorization__form__item__input_error
              : Styles.authorization__form__item__input
          }`}
        >
          <Input
            name={"login"}
            title={"Логин*"}
            className={Styles.input__item}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // onBlur={formik.handleBlur}
            value={formik.values.login}
          />
          <div
            className={`${
              formik.errors?.login && formik.touched?.login
                ? Styles.overflow__auto
                : Styles.overflow
            }`}
          >
            <span>{formik.errors.login}</span>
          </div>
        </div>
        <div
          className={`${
            formik.errors?.password && formik.touched.password
              ? Styles.authorization__form__item__input_error
              : Styles.authorization__form__item__input
          }`}
        >
          <Input
            name={"password"}
            type={"password"}
            onBlur={formik.handleBlur}
            title={"Пароль *"}
            className={Styles.input__item}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <div
            className={`${
              formik.errors?.password && formik.touched.password
                ? Styles.overflow__auto
                : Styles.overflow
            }`}
          >
            <span>{formik.errors.password}</span>
          </div>
        </div>
        <div className={Styles.authorization__form__item__forgot}>
          <CheckboxWithLabel name={"forgot"} title="Запомни меня" />
          <Link href={"/auth/forgot"}>Забыл пароль?</Link>
        </div>
        <Button type={"submit"} children={"Войти"} />
      </form>
    </div>
  );
};

export { SingInForm };
