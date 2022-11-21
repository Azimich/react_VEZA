import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Styles from "./Support.module.scss";
import { Input } from "../../../components/input/Index";
import { CheckboxWithLabel } from "components/checkbox";
import { Button } from "components/button";
import { TextareaContainer } from "components/textarea/TextareaContainer";
import { SelectContainer } from "components/select/SelectContainer";
import { dataSupportSubjectSelect } from "./mockData";

const SupportForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([{}]);

  // Валидация формы
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      city: "",
      country: "",
      order: "",
      post: "",
      forgot: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Минимум 2 символа!")
        .max(50, "Максимум 50 символов!")
        .required("Заполните Ваше Имя!"),
      lastName: Yup.string()
        .min(2, "Минимум 2 символов!")
        .max(50, "Максимум 50 символов!")
        .required("Заполните Вашу фамилию!"),
      email: Yup.string()
        .min(6, "Минимум 6 символов!")
        .max(50, "Максимум 50 символов!")
        .email("Неверный email!")
        .required("Заполните Email!"),
      phone: Yup.string()
        .min(6, "Минимум 6 символов!")
        .max(50, "Максимум 50 символов!")
        .required("Заполните телефон!"),
      company: Yup.string()
        .max(10, "Максимум 10 символов!")
        .required("Укажите ИНН компании!"),
      order: Yup.string().max(10, "Максимум 10 символов!"),
      /*        .required("Укажите номер заказа!"),*/
      post: Yup.string()
        .min(6, "Минимум 6 символов!")
        .max(50, "Максимум 50 символов!")
        .required("Обязательно для заполнения!"),
      service: Yup.string().required("Обязательно для заполнения!"),
      city: Yup.string().required("Заполните город"),
      country: Yup.string().required("Заполните страну"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const handleOnChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    const alhpabet = /[^а-яёa-z,]/iu;
    const target = e.target.value;
    formik.setFieldValue("firstName", target.replace(alhpabet, ""));
  };
  const handleOnChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    const alhpabet = /[^а-яёa-z,]/iu;
    const target = e.target.value;
    formik.setFieldValue("lastName", target.replace(alhpabet, ""));
  };
  const handleOnChangeCompany = (e: ChangeEvent<HTMLInputElement>) => {
    const numb = /[^0-9]/g;
    const target = e.target.value.replace(numb, "");
    formik.setFieldValue(
      "company",
      target.length > 10 ? target.substring(0, 10) : target
    );
  };
  const handleOnChangeTel = (e: ChangeEvent<HTMLInputElement>) => {
    const numb = /[^0-9-+]/g;
    const target = e.target.value.replace(numb, "");
    formik.setFieldValue(
      "phone",
      target.length > 20 ? target.substring(0, 20) : target
    );
  };
  const handleOnChangeOrder = (e: ChangeEvent<HTMLInputElement>) => {
    const numb = /[^0-9]/g;
    const target = e.target.value.replace(numb, "");
    formik.setFieldValue(
      "order",
      target.length > 10 ? target.substring(0, 10) : target
    );
  };
  const handleInputFileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles([...e.target.files]);
  };

  useEffect(() => {
    console.log("selectedFiles", selectedFiles);
    selectedFiles.map((e) => {
      console.log("eee");
      return e;
    });
  }, [selectedFiles]);

  return (
    <div className={Styles.support__form}>
      <form
        className={Styles.support__form__items}
        onSubmit={formik.handleSubmit}
      >
        <div className={Styles.support__form__items__select}>
          <ul
            className={`${
              formik.errors?.service && formik.touched?.service
                ? Styles.support__form__item__input_error
                : Styles.support__form__item__input
            }`}
          >
            <SelectContainer
              instanceId={"Select_support"}
              optionsData={dataSupportSubjectSelect}
              name={"service"}
              placeholder={"Выберите тему сообщения"}
              onChange={(e) => {
                formik.setFieldValue("service", e?.value ? e?.value : "");
              }}
            />
            <div
              className={`${
                formik.errors?.service && formik.touched?.service
                  ? Styles.overflow__auto
                  : Styles.overflow
              }`}
            >
              <li>{formik.errors.service}</li>
            </div>
          </ul>
        </div>
        <div className={Styles.support__form__items__input}>
          <ul
            className={`${
              formik.errors?.firstName && formik.touched?.firstName
                ? Styles.support__form__item__input_error
                : Styles.support__form__item__input
            }`}
          >
            <Input
              name={"firstName"}
              id={"firstName_id"}
              title={"Имя *"}
              type={"text"}
              className={Styles.input__item}
              onChange={(e) => handleOnChangeFirstName(e)}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            <div
              className={`${
                formik.errors?.firstName && formik.touched?.firstName
                  ? Styles.overflow__auto
                  : Styles.overflow
              }`}
            >
              <li>{formik.errors.firstName}</li>
            </div>
          </ul>
          <ul
            className={`${
              formik.errors?.lastName && formik.touched?.lastName
                ? Styles.support__form__item__input_error
                : Styles.support__form__item__input
            }`}
          >
            <Input
              name={"lastName"}
              id={"lastName_id"}
              title={"Фамилия *"}
              className={Styles.input__item}
              onChange={(e) => handleOnChangeLastName(e)}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            <div
              className={`${
                formik.errors?.lastName && formik.touched?.lastName
                  ? Styles.overflow__auto
                  : Styles.overflow
              }`}
            >
              <li>{formik.errors.lastName}</li>
            </div>
          </ul>
        </div>
        <div className={Styles.support__form__items__input}>
          <ul
            className={`${
              formik.errors?.email && formik.touched?.email
                ? Styles.support__form__item__input_error
                : Styles.support__form__item__input
            }`}
          >
            <Input
              name={"email"}
              id={"email_id"}
              title={"Почта *"}
              className={Styles.input__item}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <div
              className={`${
                formik.errors?.email && formik.touched?.email
                  ? Styles.overflow__auto
                  : Styles.overflow
              }`}
            >
              <li>{formik.errors.email}</li>
            </div>
          </ul>
          <ul
            className={`${
              formik.errors?.phone && formik.touched?.phone
                ? Styles.support__form__item__input_error
                : Styles.support__form__item__input
            }`}
          >
            <Input
              name={"phone"}
              title={"Телефон *"}
              id={"phone_id"}
              className={Styles.input__item}
              onChange={(e) => handleOnChangeTel(e)}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            <div
              className={`${
                formik.errors?.phone && formik.touched?.phone
                  ? Styles.overflow__auto
                  : Styles.overflow
              }`}
            >
              <li>{formik.errors.phone}</li>
            </div>
          </ul>
        </div>
        <div className={Styles.support__form__items__input}>
          <ul
            className={`${
              formik.errors?.company && formik.touched?.company
                ? Styles.support__form__item__input_error
                : Styles.support__form__item__input
            }`}
          >
            <Input
              name={"company"}
              title={"ИНН компании *"}
              id={"company_id"}
              className={Styles.input__item}
              onChange={(e) => handleOnChangeCompany(e)}
              onBlur={formik.handleBlur}
              value={formik.values.company}
            />
            <div
              className={`${
                formik.errors?.company && formik.touched?.company
                  ? Styles.overflow__auto
                  : Styles.overflow
              }`}
            >
              <li>{formik.errors.company}</li>
            </div>
          </ul>
          <ul
            className={`${
              formik.errors?.post && formik.touched?.post
                ? Styles.support__form__item__input_error
                : Styles.support__form__item__input
            }`}
          >
            <Input
              name={"post"}
              title={"Укажите должность *"}
              id={"post_id"}
              className={Styles.input__item}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.post}
            />
            <div
              className={`${
                formik.errors?.post && formik.touched?.post
                  ? Styles.overflow__auto
                  : Styles.overflow
              }`}
            >
              <li>{formik.errors.post}</li>
            </div>
          </ul>
        </div>
        <div className={Styles.support__form__items__input}>
          <div className={Styles.support__form__item__input}>
            <ul
              className={`${
                formik.errors?.country && formik.touched?.country
                  ? Styles.support__form__item__input_error
                  : Styles.support__form__item__input
              }`}
            >
              <Input
                name={"country"}
                title={"Страна *"}
                id={"country_id"}
                className={Styles.input__item}
                onChange={(e) => {
                  formik.setFieldValue("country", e.target.value);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.country}
              />
              <div
                className={`${
                  formik.errors?.country && formik.touched?.country
                    ? Styles.overflow__auto
                    : Styles.overflow
                }`}
              >
                <li>{formik.errors.country}</li>
              </div>
            </ul>
          </div>

          <div className={Styles.support__form__item__input}>
            <ul
              className={`${
                formik.errors?.city && formik.touched?.city
                  ? Styles.support__form__item__input_error
                  : Styles.support__form__item__input
              }`}
            >
              <Input
                name={"city"}
                title={"Город *"}
                id={"city_id"}
                className={Styles.input__item}
                onChange={(e) => {
                  formik.setFieldValue("city", e.target.value);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
              <div
                className={`${
                  formik.errors?.city && formik.touched?.city
                    ? Styles.overflow__auto
                    : Styles.overflow
                }`}
              >
                <li>{formik.errors.city}</li>
              </div>
            </ul>
          </div>
        </div>
        <div className={Styles.support__form__items__input}>
          <ul
            className={`${
              formik.errors?.order && formik.touched?.order
                ? Styles.support__form__item__input_error
                : Styles.support__form__item__input
            }`}
          >
            <Input
              name={"order"}
              title={"Номер заказа"}
              id={"order_id"}
              className={Styles.input__item}
              onChange={(e) => handleOnChangeOrder(e)}
              onBlur={formik.handleBlur}
              value={formik.values.order}
            />
            <div
              className={`${
                formik.errors?.order && formik.touched?.order
                  ? Styles.overflow__auto
                  : Styles.overflow
              }`}
            >
              <li>{formik.errors.order}</li>
            </div>
          </ul>
        </div>
        <div className={Styles.support__form__items__textarea}>
          <TextareaContainer children={"Ваше сообщение"} />
        </div>

        <div className={Styles.support__form__added__file}>
          <Input
            name={"files[]"}
            title={"Прикрепить"}
            type={"file"}
            id={"files_id"}
            value={""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputFileOnChange(e)
            }
          />
        </div>
        <CheckboxWithLabel
          name={"private_police"}
          id={"private_police_id"}
          title={"Согласие на обработку персональных данных с условиями"}
          onChangeData={() => {}}
        />
        <div className={Styles.support__form__item__answer}>
          <Button type={"submit"} children={"Отпарвить"} />
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.452 2.51457C9.50565 2.41963 9.58499 2.34035 9.68166 2.2851C9.77834 2.22985 9.88875 2.20069 10.0012 2.20069C10.1138 2.20069 10.2242 2.22985 10.3208 2.2851C10.4175 2.34035 10.4969 2.41963 10.5505 2.51457L18.6736 16.9134C18.7254 17.0048 18.7516 17.1077 18.7495 17.2117C18.7474 17.3158 18.7171 17.4176 18.6616 17.5071C18.6062 17.5965 18.5274 17.6706 18.4331 17.722C18.3388 17.7733 18.2322 17.8003 18.1237 17.8001H1.87628C1.76784 17.8003 1.66123 17.7733 1.56691 17.722C1.4726 17.6706 1.39383 17.5965 1.33836 17.5071C1.28288 17.4176 1.25261 17.3158 1.25052 17.2117C1.24842 17.1077 1.27457 17.0048 1.32641 16.9134L9.45325 2.51457H9.452ZM11.649 1.94222C10.9404 0.685926 9.06209 0.685926 8.35226 1.94222L0.226665 16.3422C0.0717712 16.6165 -0.00620502 16.9247 0.000385687 17.2367C0.00697639 17.5486 0.0979075 17.8535 0.264259 18.1215C0.43061 18.3896 0.666668 18.6115 0.949274 18.7655C1.23188 18.9195 1.55133 19.0003 1.87628 19H18.125C18.4498 19.0001 18.7691 18.9191 19.0515 18.765C19.334 18.6109 19.5699 18.389 19.7361 18.121C19.9023 17.853 19.9931 17.5482 19.9996 17.2364C20.0062 16.9245 19.9282 16.6164 19.7733 16.3422L11.6502 1.94342L11.649 1.94222ZM10.6242 7.59975C10.6242 7.44063 10.5584 7.28803 10.4412 7.17552C10.324 7.06301 10.1651 6.9998 9.99938 6.9998C9.83365 6.9998 9.67472 7.06301 9.55754 7.17552C9.44035 7.28803 9.37452 7.44063 9.37452 7.59975V12.3994C9.37452 12.5585 9.44035 12.7111 9.55754 12.8236C9.67472 12.9361 9.83365 12.9993 9.99938 12.9993C10.1651 12.9993 10.324 12.9361 10.4412 12.8236C10.5584 12.7111 10.6242 12.5585 10.6242 12.3994V7.59975ZM10.9367 15.0991C10.9367 15.3378 10.8379 15.5667 10.6621 15.7355C10.4864 15.9042 10.248 15.9991 9.99938 15.9991C9.75079 15.9991 9.51239 15.9042 9.33662 15.7355C9.16084 15.5667 9.06209 15.3378 9.06209 15.0991C9.06209 14.8605 9.16084 14.6316 9.33662 14.4628C9.51239 14.294 9.75079 14.1992 9.99938 14.1992C10.248 14.1992 10.4864 14.294 10.6621 14.4628C10.8379 14.6316 10.9367 14.8605 10.9367 15.0991Z"
                fill="#FF0303"
              />
            </svg>
            Неверный логин или пароль
          </span>
        </div>
      </form>
    </div>
  );
};

export { SupportForm };
