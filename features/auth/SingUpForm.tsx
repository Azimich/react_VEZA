import React, { FC, useState } from "react";
import { ChangeEvent } from "react";
import { FormikValues, useFormik } from "formik";
import Styles from "features/auth/SignContainer.module.scss";
import { Input } from "components/input/Index";
import { CheckboxWithLabel } from "components/checkbox";
import { Button } from "components/button";
import { ValidationRegister } from "./formsData/ValidationsShemas";
import { fieldsDataRegistr } from "./formsData/FieledsData";
import { SelectContainer } from "components/select/SelectContainer";
import { dataSupportSubjectSelect } from "features/contacts/tab_support/mockData";
import { Message } from "components/massage";
import { ErrorIcon } from "components/icons";

const SingUpForm: FC = () => {
  const [registerError, setRegisterError] = useState<boolean>(false);
  // Валидация формы
  const formik: FormikValues = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company_inn: "",
      birthdate: "",
      post: "",
      password: "",
      confirmPassword: "",
      forgot: false,
      private_police: false,
    },

    validationSchema: ValidationRegister(),
    onSubmit: (values) => {
      console.log("3224", values);
    },
  });

  const handleFilterOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    filter: RegExp,
    field = "",
    size: number = 0,
  ) => {
    const target = e.target.value.replace(filter, "");
    formik.setFieldValue(
      field,
      size > 0
        ? target.length > size
          ? target.substring(0, size)
          : target
        : target,
    );
  };

  return (
    <div className={Styles.registration__form}>
      <form
        className={Styles.registration__form__items}
        onSubmit={formik.handleSubmit}
      >
        <div className={Styles.registration__form__items__title}>
          <h1>Регистрация</h1>
        </div>
        <div className={Styles.box_field_registr}>
          {fieldsDataRegistr.length > 0 &&
            fieldsDataRegistr.map((item, index) => {
              return (
                <div
                  key={index}
                  className={Styles.registration__form__items__input}
                >
                  <ul
                    className={`${
                      formik.errors[item.name] && formik.touched[item.name]
                        ? Styles.registration__form__item__input_error
                        : Styles.registration__form__item__input
                    }`}
                  >
                    <Input
                      name={item.name}
                      id={item.name + "_id"}
                      title={item.title}
                      type={item.type}
                      className={Styles.input__item}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleFilterOnChange(e, item.filter, item.name)
                      }
                      onBlur={formik.handleBlur}
                      value={formik.values[item.name]}
                    />
                    <div
                      className={`${
                        formik.errors[item.name] && formik.touched[item.name]
                          ? Styles.overflow__auto
                          : Styles.overflow
                      }`}
                    >
                      <li>{formik.errors[item.name]}</li>
                    </div>
                  </ul>
                </div>
              );
            })}
        </div>
        <div className={Styles.registration__form__items__select__company}>
          <ul
            className={`${
              formik.errors?.company_inn && formik.touched?.company_inn
                ? Styles.registration__form__item__input_error
                : Styles.registration__form__item__input
            }`}
          >
            <SelectContainer
              instanceId={"Select_support"}
              optionsData={dataSupportSubjectSelect}
              name={"company_inn"}
              placeholder={"Название компании или ИНН"}
              type={"company_inn"}
              onChange={(e) => {
                {
                  console.log("formik", formik);
                }
                formik.setFieldValue("company_inn", e?.value ? e?.value : "");
              }}
            />
            <div
              className={`${
                formik.errors?.company_inn && formik.touched?.company_inn
                  ? Styles.overflow__auto
                  : Styles.overflow
              }`}
            >
              <li>{formik.errors.company_inn}</li>
            </div>
          </ul>
        </div>
        <div
          className={`${Styles.registration__form__items__textarea} ${Styles.no_padding}`}
        >
          <ul
            className={`${
              formik.errors?.private_police && formik.touched?.private_police
                ? Styles.registration__form__item__input_error
                : Styles.registration__form__item__input
            }`}
          >
            <CheckboxWithLabel
              name={"private_police"}
              id={"private_police_id"}
              title={"Согласие на обработку персональных данных с условиями"}
              onChangeData={(e) => {
                formik.handleChange(e);
              }}
            />
            <div
              className={`${
                formik.errors?.private_police && formik.touched?.private_police
                  ? Styles.overflow__auto
                  : Styles.overflow
              }`}
            >
              <li>{formik.errors?.private_police}</li>
            </div>
          </ul>
        </div>
        <div className={Styles.registration__form__item__answer}>
          <Button type={"submit"} children={"Зарегистрироваться"} />

          {registerError && (
            <Message type={"error"}>
              <ErrorIcon />
              ХЗ но что то пошло не так
            </Message>
          )}
        </div>
      </form>
    </div>
  );
};

export { SingUpForm };
