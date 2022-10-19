// import React, { FC } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Styles from "../../features/auth/SignContainer.module.scss";
import { Input } from "../../components/input/Index";
import { CheckboxWithLabel } from "components/checkbox";
import { Button } from "components/button";
import Link from "next/link";

// const SingInForm: FC = () => {
//   const SignupSchema = Yup.object().shape({
//     login: Yup.string()
//       .min(3, 'Минимум 3 символа!')
//       .max(50, 'Максимум 50 символов!')
//       .required('Это обязательное поле!'),
//       password: Yup.string()
//       .min(2, 'Минимум 3 символа!')
//       .max(50, 'Максимум 50 символов!')
//       .required('Это обязательное поле!'),
//   });

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
        .required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  console.log("324", formik);

  return (
    <div className={Styles.authorization__form}>
      <form
        onSubmit={formik.handleSubmit}
        className={Styles.authorization__form__item}
      >
        <div
          className={`${
            !formik.errors?.login
              ? Styles.authorization__form__item__input
              : Styles.authorization__form__item__input_error
          }`}
        >
          <Input
            name={"login"}
            placeholder={"Логин *"}
            className={Styles.input__item}
            // onChange={formik.handleChange}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            value={formik.values.login}
          />
          <div
            className={`${
              !formik.errors?.login && !formik.touched?.login
                ? Styles.overflow
                : Styles.overflow__auto
            }`}
          >
            <span>{formik.errors.password}</span>
          </div>
          <Input
            name={"password"}
            type={"password"}
            placeholder={"Пароль *"}
            className={Styles.input__item}
            value={formik.values.password}
          />
          <div
            className={`${
              !formik.errors?.password && !formik.touched?.password
                ? Styles.overflow
                : Styles.overflow__auto
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
