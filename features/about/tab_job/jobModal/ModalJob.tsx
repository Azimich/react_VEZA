import { Button } from "components/button";
import { Input } from "components/input/InputContainer";
import React, { ChangeEvent } from "react";
import Styles from "./ModalJob.module.scss";
import { UploadIcon } from "components/icons";
import { CheckboxWithLabel } from "components/checkbox";
import { useFormik } from "formik";
import * as Yup from "yup";

const ModalJob = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      forgot: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Минимум 3 символа!")
        .max(50, "Максимум 50 символов!")
        .required("Обязательно для заполнения!")
        .email("кажите имя!"),
      email: Yup.string()
        .min(6, "Минимум 6 символов!")
        .max(50, "Максимум 50 символов!")
        .email("Неверный email!")
        .required("Обязательно для заполнения!"),
      phone: Yup.string()
        .min(6, "Минимум 6 символов!")
        .max(50, "Максимум 50 символов!")
        .required("Обязательно для заполнения!"),
    }),
    onSubmit: (values: any) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  // const handleOnChangeTel = (e: ChangeEvent<HTMLInputElement>) => {
  //     const numb = /[^0-9-+]/g;
  //     const target = e.target.value.replace(numb, "");
  //     formik.setFieldValue(
  //         "phone",
  //         target.length > 20 ? target.substring(0, 20) : target
  //     );
  // };
  // const handleOnChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
  //     const alhpabet = /[^а-яёa-z,]/iu;
  //     const target = e.target.value;
  //     formik.setFieldValue("firstName", target.replace(alhpabet, ""));
  // };
  // const handleOnclickCheck = () => {
  //     console.log("Чекед авторизации");
  // };

  return (
    <div className={Styles.job__modal}>
      <h2 className={Styles.job__modal__title}>Оформить заявку</h2>
      <p className={Styles.job__modal__text}>
        Хотите стать частью нашей команды? Или нашли ваканcию, которая вам
        подходит ? Оставьте Ваши данные и мы обязательно свяжемся с Вами!
      </p>
      <form className={Styles.job__modal__inputs}>
        <div className={Styles.job__modal__form__items__input}>
          <ul
            className={`${
              formik.errors?.name && formik.touched?.name
                ? Styles.job__modal__form__item__input_error
                : Styles.job__modal__form__item__input
            }`}
          >
            <Input
              name={"name"}
              title={"Имя *"}
              className={Styles.input__item}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <div
              className={`${
                formik.errors?.name && formik.touched?.name
                  ? Styles.overflow__auto
                  : Styles.overflow
              }`}
            >
              <li>{formik.errors.name}</li>
            </div>
          </ul>
        </div>
        <div className={Styles.job__modal__form__items__input__bottom}>
          <ul
            className={`${
              formik.errors?.email && formik.touched?.email
                ? Styles.job__modal__form__item__input_error
                : Styles.job__modal__form__item__input
            }`}
          >
            <Input
              name={"email"}
              title={"Почта *"}
              className={Styles.input__item}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.company}
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
                ? Styles.job__modal__form__item__input_error
                : Styles.job__modal__form__item__input
            }`}
          >
            <Input
              name={"phone"}
              title={"Телефон *"}
              className={Styles.input__item}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.birthdate}
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
        <textarea className={Styles.textarea} placeholder={"Другое описание"} />
        <div className={Styles.support__form__added__file}>
          <label className={Styles.support__form_file}>
            <Input name={"files"} type={"file"} value={""} />
            <span>
              <UploadIcon />
              Прикрепить
            </span>
          </label>
        </div>
        <p>Расскажите больше о себе. Прикрепите Ваши резюме или портфолио.</p>
        <CheckboxWithLabel
          name={"private_police"}
          title={"Согласие на обработку персональных данных *"}
          onChange={() => {}}
        />
      </form>
      <Button type={"submit"} children={"Отправить"} />
    </div>
  );
};

export { ModalJob };
