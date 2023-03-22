import React, { FC, useState } from "react";
import * as Yup from "yup";

import Styles from "../Decision.module.scss";
import { Input } from "components/input";
import { Button } from "components/button";
import { CloseIcon } from "components/icons";
import TextareaContainer from "components/textarea/TextareaContainer";
import { useFormik } from "formik";

interface IData {
  title?: string;
  description?: string;
  image?: string;
  toggle?: () => void;
  alias?: string;
}

const AdminAddModal: FC<IData> = () => {
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

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
    formik.setFieldValue("image", event.target);
  };

  return (
    <>
      <form className={Styles.add_info} onSubmit={formik.handleSubmit}>
        <div className={Styles.add_input_block}>
          <div className={Styles.add_input_block_left}>
            <div className={Styles.add_input}>
              <Input
                name={"additional[]"}
                id={"additional[]"}
                value={formik.values["title"]}
                onChange={(e) => {
                  formik.setFieldValue("title", e.target.value);
                }}
                placeholder={"Название отрасли"}
                type={"text"}
              />
              {formik.setFieldValue && (
                <span onClick={() => {}}>
                  <CloseIcon />
                </span>
              )}
            </div>
            <TextareaContainer
              onChange={(e) => {
                formik.setFieldValue("description", e.target.value);
              }}
              name={"description"}
              placeholder={"Введите описаение"}
            />
          </div>
          <Button children={"Сохранить"} type={"submit"} />
        </div>
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
      </form>
    </>
  );
};

export { AdminAddModal };
