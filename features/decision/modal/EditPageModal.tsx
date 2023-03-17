import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Styles from "features/decision/Decision.module.scss";
import { Input } from "components/input";
import { CloseIcon } from "components/icons";
import TextareaContainer from "components/textarea/TextareaContainer";
import { Button } from "components/button";

interface IData {
  description?: string;
  title?: string;
  imageUrl?: string;
}

const EditPageModal: FC<IData> = ({ title, description, imageUrl }) => {
  const [selectedImage, setSelectedImage] = useState();
  const [postTitle, setPostTitle] = useState(title);
  const [postDesc, setPostDesc] = useState(description);
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

  const handlePostTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
    formik.setFieldValue("title", title);
  };

  const handlePostDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostDesc(e.target.value);
    formik.setFieldValue("description", description);
  };

  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      formik.setFieldValue("image", imageUrl);
    }
  };

  useEffect(() => {
    formik.setFieldValue("title", title);
    formik.setFieldValue("description", description);
    formik.setFieldValue("image", imageUrl);
  }, [imageUrl, description, title]);

  return (
    <form className={Styles.add_info} onSubmit={formik.handleSubmit}>
      <div className={Styles.add_info_banner}>
        {selectedImage && (
          <div
            className={Styles.delete_img}
            onClick={() => setSelectedImage(null)}
          >
            <CloseIcon />
          </div>
        )}

        <label className={Styles.added_input_label} htmlFor={"file"}>
          {selectedImage && (
            <img
              className={Styles.image}
              src={URL.createObjectURL(selectedImage)}
              alt={selectedImage}
            />
          )}
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
      <div className={Styles.add_input_block}>
        <div className={Styles.add_input_block_left}>
          <div className={Styles.add_input}>
            <Input
              name={"additional[]"}
              id={"additional[]"}
              value={postTitle}
              onChange={handlePostTitleChange}
              placeholder={"Название отрасли"}
              type={"text"}
            />
            {postTitle && (
              <span onClick={() => setPostTitle("")}>
                <CloseIcon />
              </span>
            )}
          </div>
          <TextareaContainer
            value={postDesc}
            onChange={handlePostDescChange}
            id={"description_"}
            name={"description_"}
            placeholder={"Введите описаение"}
          >
            {description}
          </TextareaContainer>
        </div>
        <Button children={"Сохранить"} type={"submit"} />
      </div>
    </form>
  );
};

export { EditPageModal };
