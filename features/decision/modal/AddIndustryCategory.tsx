import React, { FC, useState } from "react";
import * as Yup from "yup";

import Styles from "../Decision.module.scss";
import { Input } from "components/input";
import { Button } from "components/button";
import { ClearIcon, CloseIcon } from "components/icons";
import TextareaContainer from "components/textarea/TextareaContainer";
import { useFormik } from "formik";

interface IData {
  title?: string;
  description?: string;
  image?: string;
  toggle?: () => void;
  alias?: string;
}

const AddIndustryCategory: FC<IData> = () => {
  const [preview, setPreview] = useState<string>();
  const [postTitle, setPostTitle] = useState("");

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

  const imageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setPreview(URL.createObjectURL(event.target.files[0]));
    formik.setFieldValue("image", event.target.value);
  };

  const handlePostTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
    formik.setFieldValue("title", e.target.value);
  };

  return (
    <form className={Styles.add_info} onSubmit={formik.handleSubmit}>
      <div className={Styles.add_input_block}>
        <div className={Styles.add_input_block_left}>
          <div className={Styles.add_input_cont}>
            <Input
              name={"additional[]"}
              id={"additional[]"}
              value={postTitle}
              onChange={handlePostTitleChange}
              placeholder={"Название отрасли"}
              type={"text"}
            />
            {postTitle && (
              <div
                className={Styles.icon_clear}
                onClick={() => setPostTitle("")}
              >
                <CloseIcon />
              </div>
            )}
          </div>
          <TextareaContainer
            className={Styles.add_textarea}
            onChange={(e) => {
              formik.setFieldValue("description", e.target.value);
            }}
            name={"description"}
            placeholder={"Введите описаение"}
          />
        </div>
        <Button children={"Сохранить"} type={"submit"} />
      </div>
      {preview ? (
        <div className={`${Styles.add_info_banner} ${Styles.preview}`}>
          <img className={Styles.image} src={preview} alt={preview} />
          <div className={Styles.delete_img} onClick={() => setPreview(null)}>
            <ClearIcon />
          </div>
        </div>
      ) : (
        <div className={Styles.add_info_banner}>
          <label className={Styles.added_input_label} htmlFor={"file"}>
            <div className={Styles.added_input}>
              <div className={Styles.added_label}>
                <span className={Styles.added_label_span}>
                  <Input
                    onChange={imageChange}
                    accept={"image/*"}
                    type={"file"}
                    value={formik.values["image"]}
                    id={"file"}
                    name={"added"}
                    className={Styles.added_file}
                  />
                </span>
              </div>
            </div>
          </label>
        </div>
      )}
    </form>
  );
};

export { AddIndustryCategory };
