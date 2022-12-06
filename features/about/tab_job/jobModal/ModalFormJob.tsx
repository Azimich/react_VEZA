import React, { useState, ReactNode, useEffect } from "react";
import { Button } from "components/button";
import { Input } from "components/input/InputContainer";
import Styles from "./ModalJob.module.scss";
import { CheckboxWithLabel } from "components/checkbox";
import { FormikValues, useFormik } from "formik";
import { ChangeEvent } from "react";
import { ValidationJob } from "features/auth/formsData/ValidationsShemas";
import { fieldsDataJob } from "features/auth/formsData/FieledsData";

const ModalFormJob = () => {
  const formik: FormikValues = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      forgot: false,
      private_police: false,
    },
    validationSchema: ValidationJob(),
    onSubmit: () => {
      console.log("");
    },
  });

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFilesName, setSelectedFilesName] = useState<ReactNode>();

  //Инпут для добавления файла
  const handleInputFileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(Array.from(e.target.files));
  };

  const handleDeleteClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    index: number,
  ) => {
    e.preventDefault();
    setSelectedFiles(
      selectedFiles.filter((e) => {
        return e.lastModified != index;
      }),
    );
  };

  const handleFilterOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    filter: RegExp,
    field = "",
    size = 0,
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

  useEffect(() => {
    const el: ReactNode = (
      <ul className={Styles.input_names}>
        {selectedFiles.length > 0 &&
          selectedFiles.map((file) => {
            return (
              <li key={file.lastModified}>
                <p>{file.name}</p>
                <span
                  onClick={(e) => handleDeleteClick(e, file.lastModified)}
                ></span>
              </li>
            );
          })}
      </ul>
    );
    setSelectedFilesName(el);
  }, [selectedFiles]);

  return (
    <div className={Styles.job__modal}>
      <form className={Styles.job__modal__items} onSubmit={formik.handleSubmit}>
        <div className={Styles.job__modal__items__title}>
          <h2>Оформить заявку</h2>
          <p>
            Хотите стать частью нашей команды? Или нашли ваканcию, которая вам
            подходит? Оставьте Ваши данные и мы обязательно свяжемся с Вами!
          </p>
        </div>
        <div className={Styles.box_field}>
          {fieldsDataJob.length > 0 &&
            fieldsDataJob.map((item) => {
              return (
                <div
                  key={item.name}
                  className={`${
                    formik.errors[item.name] && formik.touched[item.name]
                      ? Styles.job__modal__item__input_error
                      : Styles.job__modal__item__input
                  }`}
                >
                  <Input
                    name={item.name}
                    id={item.name + "_id"}
                    title={item.title}
                    className={Styles.input__item}
                    onChange={(e) =>
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
                    <span>{formik.errors[item.name]}</span>
                  </div>
                </div>
              );
            })}
        </div>
        <div className={Styles.job__modal__items__input}>
          {/*          <textarea placeholder={"Другое описание"} />*/}
        </div>
        <div className={Styles.job__modal__added__file}>
          {/*          <Input
            name={"files"}
            title={"Прикрепить"}
            type={"file"}
            id={"files_id"}
            filesname={selectedFilesName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputFileOnChange(e)
            }
          />*/}
        </div>
        <div
          className={`${Styles.job__modal__items__textarea} ${Styles.no_padding} ${Styles.checkbox__auth}`}
        >
          <ul
            className={`${
              formik.errors?.private_police && formik.touched?.private_police
                ? Styles.job__modal__item__input_error
                : Styles.job__modal__item__input
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
        <div className={Styles.job__modal__item__answer}>
          <Button type={"submit"} children={"Отправить"} theme={"banner"} />
        </div>
      </form>
    </div>
  );
};

export { ModalFormJob };
