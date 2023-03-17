import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Styles from "features/decision/Decision.module.scss";
import { Input } from "components/input";
import { CloseIcon } from "components/icons";
// import TextareaContainer from "components/textarea/TextareaContainer";
import { Button } from "components/button";

interface IData {
  description?: string;
  title?: string;
  imageUrl?: string;
}
const EditPageModal: FC<IData> = ({ title, description, imageUrl }) => {
  const [file, setFile] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Обязательно для заполнения!"),
      description: Yup.string().required("Обязательно для заполнения!"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  const [inputValue, setInputValue] = useState(formik.values["title"]);

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("imageUrl", imageUrl);
    setFile(e.target.files[0]);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    formik.setFieldValue("title", title);
  };

  useEffect(() => {
    formik.setFieldValue("title", title);
    formik.setFieldValue("description", description);
    formik.setFieldValue("imageUrl", imageUrl);
  }, [imageUrl, description, title]);

  return (
    <>
      <form className={Styles.add_info} onSubmit={formik.handleSubmit}>
        <div className={Styles.add_info_banner}>
          <img
            className={Styles.image}
            src={file ? URL.createObjectURL(file) : null}
            alt={file ? file.name : null}
          />
          {file && (
            <div className={Styles.delete_img} onClick={() => setFile(null)}>
              <CloseIcon />
            </div>
          )}
          <label className={Styles.added_input_label} htmlFor={"file"}>
            <div className={Styles.added_input}>
              <div className={Styles.added_label}>
                <span className={Styles.added_label_span}>
                  <Input
                    onChange={fileHandler}
                    accept={"image/*"}
                    type={"file"}
                    id={"file"}
                    name={"added"}
                    className={Styles.added_file}
                  />
                </span>
              </div>
            </div>
          </label>
        </div>
        <div className={Styles.add_input_block}>
          <div className={Styles.add_input_block_left}>
            <div className={Styles.add_input}>
              <Input
                name={"additional[]"}
                id={"additional[]"}
                value={inputValue}
                onChange={handleChangeInput}
                placeholder={"Название отрасли"}
                type={"text"}
              />
              {formik.setFieldValue && (
                <span onClick={() => {}}>
                  <CloseIcon />
                </span>
              )}
            </div>
            <div className={Styles.add_textarea}>
              <Input
                name={"additional[]"}
                id={"additional[]"}
                value={formik.values["description"]}
                onChange={() => {
                  formik.setFieldValue("description", description);
                }}
                placeholder={"Название отрасли"}
                type={"text"}
                cols={40}
              />
            </div>
            {/*<TextareaContainer*/}
            {/*  value={formik.values["description"]}*/}
            {/*  onChange={() => {formik.setFieldValue("description", description)}}*/}
            {/*  id={"description_"}*/}
            {/*  name={"description_"}*/}
            {/*  placeholder={"Введите описаение"}*/}
            {/*>*/}
            {/*  <div>{description}</div>*/}
            {/*</TextareaContainer>*/}
            {/*<div>{description}</div>*/}
          </div>
          <Button children={"Сохранить"} type={"submit"} />
        </div>
      </form>
    </>
  );
};

export { EditPageModal };
